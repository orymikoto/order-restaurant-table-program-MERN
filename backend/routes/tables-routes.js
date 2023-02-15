// Import NPM packages
import express from 'express'

// Import local package
import * as controller from '../controller/tables-controller.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', auth, controller.get_exist_table)
router.get('/all-tables', auth, controller.get_all_tables)
router.post('/create', auth, controller.create_table)
router.patch('/update', auth, controller.update_table)
router.delete('/', auth, controller.soft_delete_table)
router.get('/update-all', auth, controller.update_all)

export default router