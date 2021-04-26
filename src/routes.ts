import { Response, Request, Router } from 'express'
import SettingsController from './controllers/SettingsController'
import UsersController from './controllers/UsersController'
import MessagesController from './controllers/MessagesController'

const routes = Router()

routes.post('/settings', SettingsController.create)
routes.post('/users', UsersController.create)
routes.post('/messages', MessagesController.create)
routes.get('/messages/:id', MessagesController.showByUser)
routes.get('/', (req: Request, res: Response) => res.render('html/client.html'))

export default routes
