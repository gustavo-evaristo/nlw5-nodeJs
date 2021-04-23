import { Router } from 'express'
import SettingsController from './controllers/SettingsController'
import UsersController from './controllers/UsersController'

const routes = Router()

routes.post('/settings', SettingsController.create)
routes.post('/users', UsersController.create)

export default routes
