// Import NPM package
import mongoose from "mongoose";

const order_schema = mongoose.Schema({
  table_id: {type: mongoose.Schema.Types.ObjectId, ref: 'table_schema', required: true},
  rent_time: {type: Object, default: {
    start: {type: Date},
    end: {type: Date}
  }, required: true},
  customer_phone_number: {type: String, required: true},
  customer_name: {type: String, default: 'anonym'},
  bills_paid: {type: Boolean, default: 'false'},
}, {collection: 'orders', timestamps: true})

export default mongoose.model('order_schema' , order_schema)