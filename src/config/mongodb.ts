import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL as string

async function initializeMongoDB() {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log('MongoDB connection ready!')
    } catch (error) {
        throw new Error((error as { message: string }).message)
    }
}

async function disconnectMongoDBConnection() {
    await mongoose.disconnect()
}

export { initializeMongoDB, disconnectMongoDBConnection }
