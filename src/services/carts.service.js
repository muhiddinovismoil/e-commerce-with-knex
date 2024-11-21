import connectDB from '../database/db.js'

export const createCartService = async (body) => {
    try {
        const { user_id, total } = body
        if (!user_id || !total) {
            throw new Error('user_id or total is not found!!!')
        }
        const data = await connectDB('carts').insert({
            user_id,
            total,
        })
        if (!data) {
            throw new Error('Cart not Found...')
        }
        return data
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const getAllCartService = async (pagination) => {
    try {
        const {skip, limit} = pagination
        const all = await connectDB('carts').select('*').offset(skip).limit(limit)
        if (!all) {
            throw new Error('Carts not found...')
        }
        return all
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const getByIdCartService = async (id) => {
    try {
        if (!id) {
            throw new Error('ID not found...')
        }
        const byID = await connectDB('carts').where('id', '=', id)

        if (!byID) {
            throw new Error('Id is not in catrs table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const updateCartService = async (id, body) => {
    try {
        if (!id || !body) {
            throw new Error('ID or body not found...')
        }
        const byID = await connectDB('carts').where('id', id).update({ body })

        if (!byID) {
            throw new Error('Id is not in catrs table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const deleteCartService = async (id) => {
    try {
        if (!id) {
            throw new Error('ID not found...')
        }
        const byID = await connectDB('carts')
            .where('id', '=', id)
            .del()

        if (!byID) {
            throw new Error('Id is not in catrs table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}
