import http from 'http'
import { expressApp } from './config/app'

const PORT = process.env.PORT ?? 8000

const server = http.createServer(expressApp)

async function startServer() {
    server.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`)
    })
}

startServer()
