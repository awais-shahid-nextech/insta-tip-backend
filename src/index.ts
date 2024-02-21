import express from 'express'

const expressApp = express()

expressApp.get('/', (_, res) => {
    res.json({okSir: true})
})

expressApp.listen(3000, () => {
    console.log('listening...')
})