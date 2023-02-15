// Import NPM packages
import express from 'express'

// Import local package
import * as controller from '../controller/orders-controller.js'
import auth from '../middleware/auth.js'

const router = express.Router()

// Router Admin
router.get('/', controller.get_all_future_table_orders)
router.get('/all-table-orders', controller.get_all_table_orders)
router.post('/all-by-date', controller.get_table_by_date)
router.post('/create-admin', controller.create_admin_table_order)
router.delete('/delete-admin', controller.delete_table_order_admin)

// Router Users
router.post('/check-table-future', auth, controller.check_table_id_order)
router.post('/check-table-time', auth, controller.check_table_order_with_time)
router.post('/create-user', auth, controller.create_users_table_order)
router.delete('/delete-user', auth, controller.delete_table_order_users)


export default router