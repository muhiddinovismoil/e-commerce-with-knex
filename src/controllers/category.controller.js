import {
    createCategoryService,
    getAllCategoriesService,
    getCategoryByIdService,
    updateCategoryService,
    deleteCategoryService,
} from '../services/index.js'

export const createCategory = async (req, res, next) => {
    try {
        const result = await createCategoryService({ categoryData: req.body })
        const { success, error, category } = result
        if (success) {
            return res
                .status(201)
                .send({ message: 'Category created successfully', category })
        } else {
            return res.status(400).send({
                message: 'Failed to create category',
                error: error.message,
            })
        }
    } catch (error) {
        next(error)
    }
}

export const getAllCategories = async (req, res, next) => {
    try {
        const result = await getAllCategoriesService(req.pagination)
        const { success, error, categories } = result
        if (success) {
            return res.status(200).send({
                message: 'Categories fetched successfully',
                categories,
            })
        } else {
            return res.status(400).send({
                message: 'Failed to fetch categories',
                error: error.message,
            })
        }
    } catch (error) {
        next(error)
    }
}

export const getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await getCategoryByIdService({ id })
        const { success, error, category } = result
        if (success) {
            return res
                .status(200)
                .send({ message: 'Category fetched successfully', category })
        } else {
            return res
                .status(404)
                .send({ message: 'Category not found', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}

export const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await updateCategoryService({ id, updateData: req.body })
        const { success, error, updatedCategory } = result
        if (success) {
            return res.status(200).send({
                message: 'Category updated successfully',
                updatedCategory,
            })
        } else {
            return res.status(400).send({
                message: 'Failed to update category',
                error: error.message,
            })
        }
    } catch (error) {
        next(error)
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await deleteCategoryService({ id })
        const { success, error } = result
        if (success) {
            return res
                .status(200)
                .send({ message: 'Category deleted successfully' })
        } else {
            return res
                .status(404)
                .send({ message: 'Category not found', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}
