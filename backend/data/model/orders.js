// Import NPM package
import mongoose from "mongoose";

const user_schema = mongoose.Schema({
  name: {type: String, require: true},
  email: {type: String, require: true, unique: true},
  password: {type: String, required: true},
  resetToken: String,
  expireToken: Date,
}, {collection: 'orders', timestamps: true})

const User = mongoose.model('User' , user_schema)

export default User