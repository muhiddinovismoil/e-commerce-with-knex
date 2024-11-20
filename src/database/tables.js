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
        if (!(await database.schema.hasTable('carts'))) {
            await database.schema.createTable('carts', (table) => {
                table.increments('id').primary()
                table.integer('user_id').unsigned().notNullable()
                table.foreign('user_id').references('id').inTable('users')
                table.string('total').defaultTo(0),
                table.timestamps(true, true)
            })
            logger.info('Carts jadvali yaratildi...')
        }
        if (!(await database.schema.hasTable('wishlist'))) {
            await database.schema.createTable('wishlist', (table) => {
                table.increments('id').primary()
                table.integer('product_id').unsigned().notNullable()
                table.foreign('product_id').references('id').inTable('product')
                table.timestamps(true, true)
            })
            logger.info('WishList jadvali yaratildi...')
        }
        if (!(await database.schema.hasTable('reviews'))) {
            await database.schema.createTable('reviews', (table) => {
                table.increments('id').primary()
                table.integer('user_id').unsigned().notNullable()
                table.foreign('user_id').references('id').inTable('users')
                table.integer('product_id').unsigned().notNullable()
                table.foreign('product_id').references('id').inTable('product')
                table.integer('rating').notNullable()
                table.text('comment').notNullable()
                table.timestamps(true, true)
            })
            logger.info('Reviews jadvali yaratildi...')
        }
    } catch (error) {
        logger.error(error.message)
    }
}
