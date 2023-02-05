// Import NPM packages
import express from 'express'

// Import local package
import * as controller from '../controller/tables-controller.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/all_tables', auth, controller.get_all_tables)
router.post('/', /*to do */)
router.patch('/', /*to do */)
router.delete('/', /*to do */)

export default router