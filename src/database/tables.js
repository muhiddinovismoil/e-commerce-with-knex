import database from './db.js'
import { logger } from '../utils/index.js'
export const createAllTables = async () => {
    try {
        if (!(await database.schema.hasTable('users'))) {
            await database.schema.createTable('users', (table) => {
                table.increments('id').primary()
                table.string('name'),
                    table.string('email').unique().notNullable(),
                    table.string('password').notNullable(),
                    table
                        .enu('role', ['user', 'admin', 'superAdmin'])
                        .notNullable()
                        .defaultTo('user'),
                    table.string('avatar'),
                    table.string('username').unique().notNullable(),
                    table.date('birth_of_date'),
                    table.string('phone_number').unique().notNullable(),
                    table.boolean('is_active').defaultTo(false),
                    table.timestamps(true, true)
            })
            logger.info('Users jadvali yaratildi')
        }
        if (!(await database.schema.hasTable('Addresses'))) {
            await database.schema.createTable('Addresses', (table) => {
                table.increments
            })
        }
    } catch (error) {
        logger.error(error.message)
    }
}
