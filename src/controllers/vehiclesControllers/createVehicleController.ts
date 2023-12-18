import { FastifyRequest, FastifyReply } from 'fastify'
import { createVehicleSchema } from '../../schemas/vehiclesSchemas'
import { createVehicle } from '../../services/vehiclesServices/createVehicleService'
import { uploadFile } from '../../services/vehiclesServices/s3Service'
import { ZodError } from 'zod'
import fs from 'fs'

export const createVehicleController = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const files = await req.saveRequestFiles()

    const fields = req.body as any

    const name = fields.name?.value || ''
    const brand = fields.brand?.value || ''
    const model = fields.model?.value || ''
    const value = parseFloat(fields.value?.value)

    if (isNaN(value)) {
      return reply.code(400).send({
        message: 'Campo inválido "value": deve ser um valor numérico.'
      })
    }

    const vehicleData = createVehicleSchema.parse({
      name,
      brand,
      model,
      value,
      photoUrl: typeof fields.photoUrl?.value === 'string' ? fields.photoUrl.value : undefined,
    })

    let photoUrl: string | undefined = vehicleData.photoUrl
    const photoFile = files.find((file) => file.fieldname === 'file' || file.fieldname === '')

    if (photoFile) {

      const stats = fs.statSync(photoFile.filepath)

      if (stats.size > 0) {
        const uploadedFile = {
          filename: photoFile.filename,
          stream: fs.createReadStream(photoFile.filepath)
        }

        try {
          photoUrl = await uploadFile(uploadedFile)
        } catch (error) {
          console.error('Erro ao fazer upload da imagem:', error)
          return reply.code(500).send({ error: 'Erro ao fazer upload da imagem' })
        }
      } else {
        return reply.code(400).send({ error: 'Arquivo vazio' })
      }
    }

    const vehicle = await createVehicle(
      vehicleData.name,
      vehicleData.brand,
      vehicleData.model,
      vehicleData.value,
      photoUrl
    )

    return reply.code(201).send(vehicle)
  } catch (error) {
    console.error('Erro no createVehicleController:', error)
    if (error instanceof ZodError) {
      return reply.code(400).send(error.flatten())
    }
    return reply.code(500).send('Erro interno do servidor')
  }
}
