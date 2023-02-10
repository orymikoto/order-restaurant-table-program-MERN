// import NPM package / mongoose
import mongoose from "mongoose";

// user schema
const user_schema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  country: {type: String},
  city: {type: String},
  phone_number: {type: String, default: 'Not Defined'},
  table_ordered: {type: [mongoose.Schema.Types.ObjectId], ref:'order_schema'},
  profile_picture: { // to store string of uri image
    data: Buffer,
    contentType: String
  },
  user_active: { type: Boolean, default: true},
  role: {
    default: 'users',
    type: String
  }
}, {collection: 'users', timestamps: true})

export default mongoose.model('user_schema', user_schema)