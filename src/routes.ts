import { Router } from 'express'
import SettingsController from './controllers/SettingsController'

const routes = Router()

routes.post('/settings', SettingsController.create)

export default routes
