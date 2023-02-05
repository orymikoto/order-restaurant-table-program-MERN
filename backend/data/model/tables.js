// import NPM package / mongoose
import mongoose from "mongoose";

// user schema
const table_schema = mongoose.Schema({
  chairs_amount: {type: Number, require: true},
  room_location: {type: String, require: true},
  table_model: {type: String, require: true},
  real_time_occupation: {type: Boolean, default: false},
  still_exist: {type: Boolean, default: true}
}, {collection: 'tables'})

// module.exports = new mongoose.model('user_schema', user_schema) // export user schema
export default mongoose.model('table_schema', table_schema)