import path from 'path'
import express from 'express'
import cors from 'cors'
import { indexRouter } from './api/home/index.routes'

const expressApp = express()
const pathToPublicFolder = path.join(__dirname, '..', 'public')

expressApp.use(
    cors({
        origin: 'http://localhost:3000',
    }),
)
expressApp.use(express.static(pathToPublicFolder))
expressApp.use(express.json())

// adding routers
expressApp.use(indexRouter)

export { expressApp }
