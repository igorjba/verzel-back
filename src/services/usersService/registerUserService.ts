import * as userRepository from '../../repositories/userRepository'
import bcrypt from 'bcryptjs'
import { Role } from '@prisma/client'

export const registerUser = async (name: string, email: string, password: string, role: Role = Role.USER) => {
  const existingUser = await userRepository.findUserByEmail(email)
  if (existingUser) {
    throw new Error('Invalid email')
  }

  const hashedPassword = bcrypt.hashSync(password, 8)
  const user = await userRepository.createUser(name, email, hashedPassword, role)
  return user
}
