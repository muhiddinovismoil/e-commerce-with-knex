import express from 'express'
import morgan from 'morgan'
import {} from './routes/index.js'
import { createAllTables } from './database/index.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/v1/auth')
app.use('/api/v1/users')
app.use('/api/v1/address')
app.use('/api/v1/social-profiles')
app.use('/api/v1/orders')
app.get('/setup', async (req, res) => {
    try {
        await createAllTables()
        return res.send('All tables created')
    } catch (error) {
        return res.status(500).send(error)
    }
})
app.use((err, req, res, next) => {
    if (err) {
        return res.send(err.message)
    }
    return res.send('Not found')
})
export default app
