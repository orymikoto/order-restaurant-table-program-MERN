// Import NPM packages
import multer from 'multer'
import * as uuid from 'uuid'

// Set multer storage destination
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './frontend/public/images')
  },
  filename: function (req, file, cb) {
    const name = uuid.v4()
    cb(null, name + `.${file.mimetype.split('/')[1]}`)
  }
})

// Set multer to use the storage information
const upload = multer({storage: storage})

export default upload