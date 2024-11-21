import {
    createProductService,
    getAllProductsService,
    getProductByIdService,
    updateProductService,
    deleteProductService,
} from '../services/index.js'

export const createProduct = async (req, res, next) => {
    try {
        const result = await createProductService({ productData: req.body })
        const { success, error, product } = result
        if (success) {
            return res
                .status(201)
                .send({ message: 'Product created successfully', product })
        } else {
            return res.status(400).send({
                message: 'Failed to create product',
                error: error.message,
            })
        }
    } catch (error) {
        next(error)
    }
}

export const getAllProducts = async (req, res, next) => {
    try {
        const result = await getAllProductsService(req.pagination)
        const { success, error, products } = result
        if (success) {
            return res
                .status(200)
                .send({ message: 'Products fetched successfully', products })
        } else {
            return res.status(400).send({
                message: 'Failed to fetch products',
                error: error.message,
            })
        }
    } catch (error) {
        next(error)
    }
}

export const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await getProductByIdService({ id })
        const { success, error, product } = result
        if (success) {
            return res
                .status(200)
                .send({ message: 'Product fetched successfully', product })
        } else {
            return res
                .status(404)
                .send({ message: 'Product not found', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await updateProductService({ id, updateData: req.body })
        const { success, error, updatedProduct } = result
        if (success) {
            return res.status(200).send({
                message: 'Product updated successfully',
                updatedProduct,
            })
        } else {
            return res.status(400).send({
                message: 'Failed to update product',
                error: error.message,
            })
        }
    } catch (error) {
        next(error)
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await deleteProductService({ id })
        const { success, error } = result
        if (success) {
            return res
                .status(200)
                .send({ message: 'Product deleted successfully' })
        } else {
            return res
                .status(404)
                .send({ message: 'Product not found', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}
