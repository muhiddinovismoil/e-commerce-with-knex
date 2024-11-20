import database from './db.js'
import { logger } from '../utils/index.js'
export const createAllTables = async () => {
    try {
        if (!(await database.schema.hasTable('users'))) {
            await database.schema.createTable('users', (table) => {
                table.increments('id').primary()
                table.string('name')
                table.string('email').unique().notNullable()
                table.string('password').notNullable()
                table
                    .enu('role', ['user', 'admin', 'superAdmin'])
                    .notNullable()
                    .defaultTo('user')
                table.string('avatar')
                table.string('username').unique().notNullable()
                table.date('birth_of_date')
                table.string('phone_number').unique().notNullable()
                table.boolean('is_active').defaultTo(false)
                table.timestamps(true, true)
            })
            logger.info('Users jadvali yaratildi')
        }
        if (!(await database.schema.hasTable('otp_codes'))) {
            await database.schema.createTable('otp_codes', (table) => {
                table.increments('id').primary()
                table.string('otp_code').notNullable()
                table.integer('user_id').notNullable()
            })
        }
        if (!(await database.schema.hasTable('Addresses'))) {
            await database.schema.createTable('Addresses', (table) => {
                table.increments('id').primary()
                table
                    .integer('user_id')
                    .unsigned()
                    .references('id')
                    .inTable('users')
                    .notNullable()
                table.string('title').notNullable()
                table.string('address_line_1').notNullable()
                table.string('address_line_2')
                table.string('country').notNullable()
                table.string('city').notNullable()
                table.string('postal_code').notNullable()
                table.string('phone_number').notNullable()
                table.string('landmark')
                table.timestamps(true, true)
            })
            logger.info('Addresslar jadvali yaratildi')
        }
        if (!(await database.schema.hasTable('social_profiles'))) {
            await database.schema.createTable('social_profiles', (table) => {
                table.increments('id').primary()
                table
                    .integer('user_id')
                    .unsigned()
                    .references('id')
                    .inTable('users')
                    .notNullable()
                table.string('platform').notNullable()
                table.string('platform_user').notNullable()
            })
            logger.info('Social Profiles jadvali yaratildi')
        }
    } catch (error) {
        logger.error(error.message)
    }
}
