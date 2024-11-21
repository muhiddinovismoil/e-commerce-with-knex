import connectDB from '../database/db.js'

export const createProductService = async ({ productData }) => {
    try {
        const [product] = await connectDB('products')
            .insert(productData)
            .returning('*')
        if (!product) {
            throw new Error('Failed to create product')
        }
        return { success: true, product }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAllProductsService = async (pagination) => {
    try {
        const {skip, limit} = pagination
        const products = await connectDB.select('*').from('products').offset(skip).limit(limit)
        return { success: true, products }
    } catch (error) {
        return { success: false, error }
    }
}

export const getProductByIdService = async ({ id }) => {
    try {
        const product = await connectDB
            .select('*')
            .from('products')
            .where('id', id)
            .first()
        if (!product) {
            throw new Error('Product not found')
        }
        return { success: true, product }
    } catch (error) {
        return { success: false, error }
    }
}

export const updateProductService = async ({ id, updateData }) => {
    try {
        const [updatedProduct] = await connectDB('products')
            .where('id', id)
            .update(updateData)
            .returning('*')
        if (!updatedProduct) {
            throw new Error('Failed to update product')
        }
        return { success: true, updatedProduct }
    } catch (error) {
        return { success: false, error }
    }
}

export const deleteProductService = async ({ id }) => {
    try {
        const deleted = await connectDB('products').where('id', id).del()
        if (!deleted) {
            throw new Error('Product not found')
        }
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}
