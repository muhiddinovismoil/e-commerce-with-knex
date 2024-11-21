import connectDB from '../database/db.js'

export const createReviewsService = async (body) => {
    try {
        const { user_id, product_id , rating, comment} = body
        if (!user_id || !product_id) {
            throw new Error('user_id or product_id is not found!!!')
        }
        const data = await connectDB('reviews').insert({
            user_id,
            product_id, 
            rating,
            comment
        })
        if (!data) {
            throw new Error('reviews not Found...')
        }
        return data
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const getAllReviewsService = async (pagination) => {
    try {
        const {skip, limit} = pagination
        const all = await connectDB('reviews').select('*').offset(skip).limit(limit)
        if (!all) {
            throw new Error('reviews not found...')
        }
        return all
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}

export const getByIdReviewsService = async (id) => {
    try {
        if (!id) {
            throw new Error('ID not found...')
        }
        const byID = await connectDB('reviews').where('id', '=', id)

        if (!byID) {
            throw new Error('Id is not in reviews table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}
export const updateReviewsService = async (id, body) => {
    try {
        const { user_id, product_id } = body
        if (!user_id || !product_id) {
            throw new Error('user_id or product_id is not found!!!')
        }
        const byID = await connectDB('carts').where('id', id).update({body })

        if (!byID) {
            throw new Error('Id is not in catrs table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}
export const deleteReviewsService = async (id) => {
    try {
        if (!id) {
            throw new Error('ID not found...')
        }
        const byID = await connectDB('reviews').where('id', id).del()

        if (!byID) {
            throw new Error('Id is not in reviews table!!!')
        }
        return byID
    } catch (error) {
        throw new Error(`Error:--> ${error.message}`)
    }
}
