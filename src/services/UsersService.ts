import UsersRepository from '../repositories/UsersRepository'

import { getCustomRepository } from 'typeorm'

export default class UsersService {
  async create (email: string) {
    const usersRepository = getCustomRepository(UsersRepository)

    const userAlreadyExists = await usersRepository.findOne({ email })

    if (userAlreadyExists) return userAlreadyExists

    const user = usersRepository.create({ email })

    await usersRepository.save(user)

    return user
  }
}
