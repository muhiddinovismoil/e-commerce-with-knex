import connectDB from '../database/db.js'

export const createWishlistService = async (body) => {
    try {
        const { user_id, product_id } = body
        if (!user_id || !product_id) {
            throw new Error('user_id or product_id is not found!!!')
        }
        const data = await connectDB('wishlist').insert({
            user_id,
            product_id,
        })
        if (!data) {
            throw new Error('wishlist not Found...')
        }
        return data
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const getAllWishlistService = async (pagination) => {
    try {
        const {skip, limit} = pagination
        const all = await connectDB('wishlist').select('*').offset(skip).limit(limit)
        if (!all) {
            throw new Error('wishlist not found...')
        }
        return all
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const getByIdWishlistService = async (id) => {
    try {
        if (!id) {
            throw new Error('ID not found...')
        }
        const byID = await connectDB('wishlist').where('id', '=', id)

        if (!byID) {
            throw new Error('Id is not in wishlist table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}
export const deleteWishlistService = async (id) => {
    try {
        if (!id) {
            throw new Error('ID not found...')
        }
        const byID = await connectDB('wishlist').where('id', id).del()

        if (!byID) {
            throw new Error('Id is not in wishlist table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}
