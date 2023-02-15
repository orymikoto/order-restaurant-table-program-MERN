// import NPM package / mongoose
import mongoose from "mongoose";

// table schema
const table_schema = mongoose.Schema({
  name: {type: String, unique: true, required: true},
  chairs_amount: {type: Number, required: true},
  room_location: {type: String, required: true},
  table_model: {type: String, required: true},
  real_time_occupation: {type: Boolean, default: false},
  still_exist: {type: Boolean, default: true}
}, {collection: 'tables'})

export default mongoose.model('table_schema', table_schema)