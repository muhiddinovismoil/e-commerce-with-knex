import connectDB from '../database/db.js'

export const createCategoryService = async ({ categoryData }) => {
    try {
        const [category] = await connectDB('categories')
            .insert(categoryData)
            .returning('*')
        if (!category) {
            throw new Error('Failed to create category')
        }
        return { success: true, category }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAllCategoriesService = async () => {
    try {
        const categories = await connectDB.select('*').from('categories')
        return { success: true, categories }
    } catch (error) {
        return { success: false, error }
    }
}

export const getCategoryByIdService = async ({ id }) => {
    try {
        const category = await connectDB
            .select('*')
            .from('categories')
            .where('id', id)
            .first()
        if (!category) {
            throw new Error('Category not found')
        }
        return { success: true, category }
    } catch (error) {
        return { success: false, error }
    }
}

export const updateCategoryService = async ({ id, updateData }) => {
    try {
        const [updatedCategory] = await connectDB('categories')
            .where('id', id)
            .update(updateData)
            .returning('*')
        if (!updatedCategory) {
            throw new Error('Failed to update category')
        }
        return { success: true, updatedCategory }
    } catch (error) {
        return { success: false, error }
    }
}

export const deleteCategoryService = async ({ id }) => {
    try {
        const deleted = await connectDB('categories').where('id', id).del()
        if (!deleted) {
            throw new Error('Category not found')
        }
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}
