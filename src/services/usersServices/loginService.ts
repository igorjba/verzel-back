import bcrypt from 'bcryptjs'
import { app } from '../../app'
import * as userRepository from '../../repositories/userRepository'

export const loginUser = async (email: string, password: string) => {
  const user = await userRepository.findUserByEmail(email)

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Error('Email ou senha inválidos')
  }

  const token = app.jwt.sign({ id: user.id, name: user.name, email: user.email, role: user.role })

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
  }
}
