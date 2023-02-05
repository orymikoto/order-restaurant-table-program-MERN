// Import NPM packages
import express from 'express'


// Import local package
import * as controller from '../controller/users-controller.js' 
import auth from '../middleware/auth.js' // Middleware for authentication using jwt and bearer token
import upload from '../middleware/picture-upload.js' // Middleware for retrieve file using multer

const router = express.Router()

router.get('/', controller.get_active_users)
router.get('/all-users', controller.get_all_users)
router.get('/profile', auth, controller.get_user_profile )
router.post('/register', controller.register)
router.post('/login', controller.login)
router.patch('/update-profile', auth, controller.update_profile)
router.patch('/change-password', auth, controller.password_update)
router.patch('/update-picture', auth, upload.single('image'), controller.upload_picture)
router.delete('/', auth, controller.deactivate_user)

export default router