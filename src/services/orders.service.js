import connectDB from '../database/db.js'

export const createOrderService = async (body) => {
    try {
        const { user_id, product_id } = body
        if (!user_id || !product_id) {
            throw new Error('user_id or product_id is not found!!!')
        }
        const data = await connectDB('orders').insert({
            user_id,
            product_id,
        })
        if (!data) {
            throw new Error('orders not Found...')
        }
        return data
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const getAllOrderService = async (pagination) => {
    try {
        const {skip, limit} = pagination
        const all = await connectDB('orders').select('*').offset(skip).limit(limit)
        if (!all) {
            throw new Error('orders not found...')
        }
        return all
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const getByIdOrderService = async (id) => {
    try {
        if (!id) {
            throw new Error('ID not found...')
        }
        const byID = await connectDB('orders').where('id', '=', id)

        if (!byID) {
            throw new Error('Id is not in orders table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}
export const deleteOrderService = async (id) => {
    try {
        if (!id) {
            throw new Error('ID not found...')
        }
        const byID = await connectDB('orders').where('id', id).del()

        if (!byID) {
            throw new Error('Id is not in orders table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}
