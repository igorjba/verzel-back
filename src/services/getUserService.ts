import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface GetUserServiceRequest {
  id: string
}

interface GetUserServiceResponse {
  user: User
}

export class GetUserService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ id }: GetUserServiceRequest): Promise<GetUserServiceResponse> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return { user }
  }
}
