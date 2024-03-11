import { Router } from 'express'
import HomeController from './index.controller'

const indexRouter = Router()

const homeController = new HomeController()

indexRouter.get('/', homeController.index.bind(homeController))

export { indexRouter }
