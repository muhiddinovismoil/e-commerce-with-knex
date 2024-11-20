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
                        .enum('role', ['user', 'admin', 'superAdmin'])
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
            //Products jadvali
            if (!(await database.schema.hasTable('products'))) {
                await database.schema.createTable('products', (table) => {
                    table.increments('id').primary()
                    table
                        .integer('category_id')
                        .unsigned()
                        .references('id')
                        .inTable('categories')
                        .onDelete('CASCADE')
                    table.string('title').notNullable()
                    table.string('picture')
                    table.string('summary')
                    table.text('description')
                    table.decimal('price', 10, 2).notNullable()
                    table.enu('discount_type', ['percentage', 'fixed'])
                    table.decimal('discount_value', 10, 2)
                    table.specificType('tags', 'text[]')
                    table.timestamps(true, true)
                })
                logger.info('Products table created')
            }
            //cart item jadvali
            if (!(await database.schema.hasTable('cart_item'))) {
                await database.schema.createTable('cart_item', (table) => {
                    table.increments('id').primary()
                    table.integer('cart_id').unsigned().notNullable()
                    table
                        .integer('product_id')
                        .unsigned()
                        .references('id')
                        .inTable('products')
                        .onDelete('CASCADE')
                    table.integer('quantity').notNullable()
                    table.timestamps(true, true)
                })
                logger.info('Cart item table created')
            }
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
