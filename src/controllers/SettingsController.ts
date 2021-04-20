import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import SettingsRepository from '../repositories/SettingsRepository'

class SettingsController {
  public async create (req: Request, res: Response): Promise<Response> {
    const settingsRepository = getCustomRepository(SettingsRepository)

    const { username, chat } = req.body

    const settings = settingsRepository.create({
      username,
      chat
    })

    await settingsRepository.save(settings)

    return res.status(201).json(settings)
  }
}

export default new SettingsController()
