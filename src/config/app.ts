import path from 'path'
import express from 'express'
import cors from 'cors'
import { indexRouter } from '../api/home/index.routes'
import morgan from 'morgan'

const expressApp = express()
const pathToPublicFolder = path.join(__dirname, '..', 'public')

// middlewares
expressApp.use(
    cors({
        origin: 'http://localhost:3000',
    }),
)
expressApp.use(express.static(pathToPublicFolder))
expressApp.use(express.json())
expressApp.use(morgan('combined'))

// adding routers
expressApp.use(indexRouter)

export { expressApp }
