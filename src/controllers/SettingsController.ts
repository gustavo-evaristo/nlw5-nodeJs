import { Request, Response } from 'express'
import SettingsService from '../services/SettingsService'

class SettingsController {
  public async create (req: Request, res: Response): Promise<Response> {
    const { username, chat } = req.body

    const settingsService = new SettingsService()

    try {
      const settings = await settingsService.create({ username, chat })

      return res.status(201).json(settings)
    } catch (error) {
      return res.status(400).json({ msg: error.message })
    }
  }
}

export default new SettingsController()
