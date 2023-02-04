// import NPM package / mongoose
import mongoose from "mongoose";

// user schema
const user_schema = mongoose.Schema({
  name: {type: String, require: true},
  email: {type: String, require: true, unique: true},
  password: {type: String, required: true},
  address: {type: String},
  table_ordered: {type: Object, default: {}},
  profile_picture: { // to store string of uri image
    data: Buffer,
    contentType: String
    // default: './frontend/public/images/default-pp.png'
  },
  user_active: { type: Boolean, default: true},
  // resetToken: String,
  // expireToken: Date,
  role: {
    default: 'users',
    type: String
  }
}, {collection: 'users', timestamps: true})

// module.exports = new mongoose.model('user_schema', user_schema) // export user schema
export default mongoose.model('user_schema', user_schema)