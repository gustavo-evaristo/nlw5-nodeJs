import { getCustomRepository } from 'typeorm'
import SettingsRepository from '../repositories/SettingsRepository'

interface ISettingsCreate{
  username: string,
  chat: boolean
}

export default class SettingsService {
  async create ({ username, chat }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository)

    const userAlreadyExists = await settingsRepository.findOne({
      username
    })

    if (userAlreadyExists) throw new Error('User already exists!')

    const settings = settingsRepository.create({ username, chat })

    await settingsRepository.save(settings)

    return settings
  }
}
