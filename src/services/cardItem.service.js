import connectDB from '../database/db.js'

export const createCartItemService = async ({ cartItemData }) => {
    try {
        const { category_id } = cartItemData
        const category = await connectDB
            .select('*')
            .from('categories')
            .where('id', category_id)
            .first()
        if (!category) {
            throw new Error('Category not found')
        }
        const [cartItem] = await connectDB('cart_item')
            .insert(cartItemData)
            .returning('*')
        if (!cartItem) {
            throw new Error('Failed to create cart item')
        }
        return { success: true, cartItem }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAllCartItemsService = async () => {
    try {
        const cartItems = await connectDB.select('*').from('cart_item')
        return { success: true, cartItems }
    } catch (error) {
        return { success: false, error }
    }
}

export const getCartItemByIdService = async ({ id }) => {
    try {
        const cartItem = await connectDB
            .select('*')
            .from('cart_item')
            .where('id', id)
            .first()
        if (!cartItem) {
            throw new Error('Cart item not found')
        }
        return { success: true, cartItem }
    } catch (error) {
        return { success: false, error }
    }
}

export const updateCartItemService = async ({ id, updateData }) => {
    try {
        const { category_id } = updateData
        const category = await connectDB
            .select('*')
            .from('categories')
            .where('id', category_id)
            .first()
        if (!category) {
            throw new Error('Category not to update')
        }
        const [updatedCartItem] = await connectDB('cart_item')
            .where('id', id)
            .update(updateData)
            .returning('*')
        if (!updatedCartItem) {
            throw new Error('Failed to update cart item')
        }
        return { success: true, updatedCartItem }
    } catch (error) {
        return { success: false, error }
    }
}

export const deleteCartItemService = async ({ id }) => {
    try {
        const deleted = await connectDB('cart_item').where('id', id).del()
        if (!deleted) {
            throw new Error('Cart item not found')
        }
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}
