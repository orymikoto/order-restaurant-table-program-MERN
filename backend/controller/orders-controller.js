// Import NPM package
import dotenv from 'dotenv'
import moment from 'moment'

// Import local package
import order_schema from '../data/model/orders.js'
import user_schema from '../data/model/users.js'
import table_schema from '../data/model/tables.js'

// Actiavte dotenv
dotenv.config()

// Get all table orders that is going to happens function
// Admin
export const get_all_future_table_orders = async (req, res) => {
  try {
    const table_orders = await order_schema.find({ "rent_time.start" : {$gte: moment().startOf('day').toDate()}})
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

// Check table orders using table_id on certain time 
// Users

// Check table order that is going to happens using table_id
// Users

// Create table order with login user function
// Users

// Create table order without user function
// Admin

// Delete table order function
// Users

// Delete table order function
// Admin

// Deactivate user profile function