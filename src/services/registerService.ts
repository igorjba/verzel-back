import * as userRepository from '../repositories/userRepository'
import bcrypt from 'bcryptjs'

export const registerUser = async (email: string, password: string, isAdmin: boolean) => {
  const existingUser = await userRepository.findUserByEmail(email)
  if (existingUser) {
    throw new Error('User already exists')
  }

  const hashedPassword = bcrypt.hashSync(password, 8)
  const user = await userRepository.createUser(email, hashedPassword, isAdmin)
  return user
}
