// Import NPM packages
import express from 'express'

// Import local package
import * as controller from '../controller/users-controller.js' 
import * as auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', /*to do */)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.patch('/update-profile', auth.authentication, controller.update_profile)
router.patch('/change-password', auth.authentication, controller.password_update)
router.delete('/', /*to do */)

export default router