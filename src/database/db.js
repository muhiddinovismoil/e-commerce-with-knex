import knex from 'knex'
import { db } from '../config/index.js'
const connectDB = knex({
    client: 'pg',
    connection: {
        host: db.host,
        port: db.port,
        user: db.user,
        password: db.password,
        database: db.name,
    },
})
export default connectDB
