import { Router } from 'express'
import {
    getAllAddressesController,
    getAddressByIdController,
    createAddressController,
    updateAddressByIdController,
    deleteAddressByIdController,
} from '../controllers/index.js'
import { addressSchema } from '../validations/index.js'
import { authGuard, roleGuard, validateSchema } from '../middlewares/index.js'
export const addressRouter = Router()
addressRouter.get('/', authGuard, getAllAddressesController)
addressRouter.get('/:id', authGuard, getAddressByIdController)
addressRouter.post(
    '/',
    authGuard,
    validateSchema(addressSchema),
    createAddressController,
)
addressRouter.put(
    '/:id',
    authGuard,
    roleGuard('admin', 'superAdmin'),
    updateAddressByIdController,
)
addressRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'superAdmin'),
    deleteAddressByIdController,
)
