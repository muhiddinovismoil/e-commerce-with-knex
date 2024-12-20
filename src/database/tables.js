import database from './db.js'
import { logger } from '../utils/index.js'

export const createAllTables = async () => {
    try {
        // Users Table
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
            logger.info('Users table created.')
        }

        // Addresses Table
        if (!(await database.schema.hasTable('addresses'))) {
            await database.schema.createTable('addresses', (table) => {
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
            logger.info('Addresses table created.')
        }
        // Categories Table
        if (!(await database.schema.hasTable('categories'))) {
            await database.schema.createTable('categories', (table) => {
                table.increments('id').primary()
                table.string('name').notNullable()
                table.string('description').notNullable()
                table.string('tag').notNullable()
                table.timestamps(true, true)
            })
            logger.info('Products table created.')
        }
        // Products Table
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
            logger.info('Products table created.')
        }

        // Cart Items Table
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
            logger.info('Cart items table created.')
        }

        // OTP Codes Table
        if (!(await database.schema.hasTable('otp_codes'))) {
            await database.schema.createTable('otp_codes', (table) => {
                table.increments('id').primary()
                table.string('otp_code').notNullable()
                table.integer('user_id').notNullable()
            })
            logger.info('OTP Codes table created.')
        }

        // Social Profiles Table
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
            logger.info('Social Profiles table created.')
        }

        // Carts Table
        if (!(await database.schema.hasTable('carts'))) {
            await database.schema.createTable('carts', (table) => {
                table.increments('id').primary()
                table.integer('user_id').unsigned().notNullable()
                table.foreign('user_id').references('id').inTable('users')
                table.string('total').defaultTo(0)
                table.timestamps(true, true)
            })
            logger.info('Carts table created.')
        }

        // Wishlist Table
        if (!(await database.schema.hasTable('wishlist'))) {
            await database.schema.createTable('wishlist', (table) => {
                table.increments('id').primary()
                table.integer('product_id').unsigned().notNullable()
                table.foreign('product_id').references('id').inTable('products')
                table.timestamps(true, true)
            })
            logger.info('Wishlist table created.')
        }

        // Reviews Table
        if (!(await database.schema.hasTable('reviews'))) {
            await database.schema.createTable('reviews', (table) => {
                table.increments('id').primary()
                table.integer('user_id').unsigned().notNullable()
                table.foreign('user_id').references('id').inTable('users')
                table.integer('product_id').unsigned().notNullable()
                table.foreign('product_id').references('id').inTable('products')
                table.integer('rating').notNullable()
                table.text('comment').notNullable()
                table.timestamps(true, true)
            })
            logger.info('Reviews table created.')
        }

        // Orders Table
        if (!(await database.schema.hasTable('orders'))) {
            await database.schema.createTable('orders', (table) => {
                table.increments('id').primary()
                table
                    .integer('user_id')
                    .unsigned()
                    .references('id')
                    .inTable('users')
                    .notNullable()
                table
                    .integer('cart_id')
                    .unsigned()
                    .references('id')
                    .inTable('carts')
                    .notNullable()
                table.timestamps(true, true)
            })
            logger.info('Orders table created.')
        }
    } catch (error) {
        logger.error(error.message)
    }
}
