import { S3Client } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import { Readable } from 'stream'
import { env } from '../../env/index'

export const uploadFile = async (file: { filename: string; stream: Readable }) => {
  const s3Client = new S3Client({
    region: env.AWS_REGION,
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    }
  })

  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: env.AWS_S3_BUCKET_NAME,
      Key: `vehicles/${file.filename}`,
      Body: file.stream,
      ACL: 'public-read',
      ContentType: 'image/jpeg',
    },
  })

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await upload.done()
    return `https://${env.AWS_S3_BUCKET_NAME}.s3-${env.AWS_REGION}.amazonaws.com/vehicles/${file.filename}`
  } catch (error) {
    console.error('Erro no uploadFile:', error)
    throw new Error('Erro ao fazer upload do arquivo para o S3')
  }
}
