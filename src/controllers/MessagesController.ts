/* eslint-disable camelcase */

import { Request, Response } from 'express'
import MessagesService from '../services/MessagesServices'

class MessagesController {
  async create (req: Request, res: Response): Promise<Response> {
    const messagesService = new MessagesService()

    try {
      const { admin_id, text, user_id } = req.body

      const message = await messagesService.create({
        admin_id,
        text,
        user_id
      })

      return res.status(201).json(message)
    } catch (error) {
      return res.status(400).json({ msg: error.message })
    }
  }

  async showByUser (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const messagesService = new MessagesService()

    const list = await messagesService.listByUser(id)

    return res.status(200).json(list)
  }
}

export default new MessagesController()
