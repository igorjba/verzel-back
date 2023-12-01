import bcrypt from 'bcryptjs'
import { app } from '../app'
import * as userRepository from '../repositories/userRepository'

export const loginUser = async (email: string, password: string) => {
  const user = await userRepository.findUserByEmail(email)
  if (!user) {
    throw new Error('User does not exist')
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password)
  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }

  const token = app.jwt.sign({ id: user.id }, { expiresIn: '24h' })
  return token
}
