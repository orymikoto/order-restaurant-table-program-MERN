// Import NPM package
import dotenv from 'dotenv'
import moment from 'moment'
import 'moment-timezone'
import jwt from 'jsonwebtoken'

// Import local package
import order_schema from '../data/model/orders.js'
import user_schema from '../data/model/users.js'
import table_schema from '../data/model/tables.js'

// Actiavte dotenv
dotenv.config()

// Get all table orders that is going to happens function
// Admin / Users
export const get_all_future_table_orders = async (req, res) => {
  try {
    // console.log(moment().tz('Asia/Jakarta').toDate());
    const table_orders = await order_schema.find({ "rent_time.start" : {$gte: moment().tz('Asia/Jakarta').toDate()}})

    //Guide on how to parse the date
    // console.log(moment(table_orders[0].rent_time.start).tz('Asia/Jakarta').format("YYYY-MM-DD HH:mm"))

    return res.status(200).json({message: 'All future table orders is retrieved', data: table_orders})
  } catch (error) {
    console.log( error );
    return res.status(500).json({message: 'Something went wrong', error: error})
  }
}

// Get all table orders, include 1 week before now function
// Admin
export const get_all_table_orders = async (req, res) => {
  try {
    const table_orders = await order_schema.find()
    return res.status(200).json({message: 'All future table orders is retrieved', data: table_orders})
  } catch (error) {
    console.log( error );
    return res.status(500).json({message: 'Something went wrong', error: error})
  }
}

// Get table orders by date
// Admin
export const get_table_by_date = async (req, res) => {
  try {
    const {req_date} = req.body
    const exact_date = moment(req_date).tz('Asia/Jakarta').startOf(req_date).toDate()
    // console.log(moment(req_date).startOf(req_date).toDate());
    const table_orders = await order_schema.find({"rent_time.start": {
      $gte: exact_date,
      $lt: moment(req_date).tz('Asia/Jakarta').startOf(req_date).add(1, 'day').toDate()
    }})

    return res.status(200).json({message: `Table orders at ${req_date} is retrieved`, data: table_orders})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Something went wrong', error: error})
  }
}

// Check table orders on certain time 
// Users
export const check_table_order_with_time = async (req, res) => {
  try {
    const {table_id, start_time, end_time} = req.body
    // console.log(moment(start_time).tz('Asia/Jakarta').toDate());
    const check_table_order = await order_schema.find(
      { $or: [{
        $and: [{"rent_time.start": {$gte: moment(start_time).toDate()}}, {"rent_time.start": {$lte: moment(end_time).toDate()}}],
        $and: [{"rent_time.end": {$gte: moment(start_time).toDate()}}, {"rent_time.start": {$lte: moment(end_time).toDate()}}]
      }]}
    ).populate({path: 'table_id'}).select('table_id rent_time')
    if(check_table_order.length < 1){
      return res.status(200).json({message: 'Schedule is available', available: true})
    }
    return res.status(200).json({message: 'Schedule is not available', available: false, data: check_table_order})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Something went wrong', error: error})
  }
}

// Check table order that is going to happens using table_id
// Users
export const check_table_id_order = async (req, res) => {
  try {
    const {table_id} = req.body
    const check_table_order = await order_schema.find({
      table_id: table_id,
      "rent_time.start": {$gt: moment().tz('Asia/Jakarta').toDate()},
    })
    if(check_table_order.length < 1){
      return res.status(200).json({message: 'This table does not have any schedule'})
    }
    return res.status(200).json({message: 'This table have some order schedule', data: check_table_order})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Something went wrong', error: error})
  }
}

// Create table order with login user function
// Users
export const create_users_table_order = async (req, res) => {
  try {
    const {table_id, start_time, end_time, customer_phone_number, customer_name} = req.body 
    const new_table_order = await order_schema.create({
      table_id: table_id,
      rent_time: {
        start: moment(start_time).tz('Asia/Jakarta').toDate(),
        end: moment(end_time).tz('Asia/Jakarta').toDate()
      },
      customer_name: customer_name,
      customer_phone_number: customer_phone_number
    })

    const user_info = jwt.decode(req.headers['authorization'].split(" ")[1])
    const save_to_user = await user_schema.findOneAndUpdate({email: user_info.email}, {
      $push: {
        table_ordered: new_table_order._id
      }
    })

    return res.status(200).json({message: "Table order successfully created and pushed data id to user", data: new_table_order, user_email: save_to_user.email})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Something went wrong', error: error})
  }
}

// Create table order without user function
// Admins
export const create_admin_table_order = async (req, res) => {
  try {
    const {table_id, start_time, end_time, customer_phone_number, customer_name} = req.body 
    const new_table_order = await order_schema.create({
      table_id: table_id,
      rent_time: {
        start: moment(start_time).tz('Asia/Jakarta').toDate(),
        end: moment(end_time).tz('Asia/Jakarta').toDate()
      },
      customer_name: customer_name,
      customer_phone_number: customer_phone_number
    })
    return res.status(200).json({message: "Table order successfully created", data: new_table_order})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Something went wrong', error: error})
  }
}

// Delete table order function
// Users
export const delete_table_order_users = async (req, res) => {
  try {
    const { table_order_id } = req.body
    const user_info = jwt.decode(req.headers['authorization'].split(" ")[1])
    
    const deleted_table_order = await order_schema.findByIdAndDelete(table_order_id)

    if(!deleted_table_order){
      return res.status(404).json({message: `Table order with id ${table_order_id} not found`})
    }

    await user_schema.findByIdAndUpdate(user_info.id, {
      $pull: {
        table_ordered: {
          _id: table_order_id
        }
      }
    })

    return res.status(200).json({message: 'Table order successfully deleted', data: deleted_table_order})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Something went wrong', error: error})
  }
}

// Delete table order function
// Admin
export const delete_table_order_admin = async (req, res) => {
  try {
    const { table_order_id } = req.body
    const deleted_table_order = await order_schema.findByIdAndDelete(table_order_id)
    
    if(!deleted_table_order){
      return res.status(404).json({message: `Table order with id ${table_order_id} not found`})
    }

    return res.status(200).json({message: 'Table order successfully deleted', data: deleted_table_order})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Something went wrong', error: error})
  }
}