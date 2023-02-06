// Import NPM packages
import express from 'express'

// Import local package
import * as controller from '../controller/orders-controller.js'

const router = express.Router()

// Router Admin
router.get('/', controller.get_all_future_table_orders)
router.post('/admin', controller.create_admin_table_order)
router.patch('/', /*to do */)
router.delete('/', /*to do */)

// Router Users

export default router