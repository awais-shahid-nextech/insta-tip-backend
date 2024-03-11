import http from 'http'
import { expressApp } from './config/app'
import { initializeMongoDB } from './config/mongodb'

const PORT = process.env.PORT ?? 8000

const server = http.createServer(expressApp)

async function startServer() {
    try {
        await initializeMongoDB()
        server.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`)
        })
    } catch (error) {
        console.error((error as { message: string }).message)
        process.exit(1)
    }
}

startServer()
