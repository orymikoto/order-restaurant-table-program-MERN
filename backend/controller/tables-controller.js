// Import NPM package

// Import local package
import table_schema from '../data/model/tables.js'

// Get all tables
export const get_all_tables = async (req, res) => {
    try {
      const all_tables = await table_schema.find({})
      return res.status(200).json({message: 'All tables retrieved.', data: all_tables})
    } catch (error) {
      return res.status(500).json({message: 'something went wrong.', error: error})
    }
}

// Create new tables instance
export const create_table = async (req, res) => {
  try {
    const {chairs_amount, room_location, table_model} = req.body
    if (!chairs_amount || !room_location || !table_model){
      return res.status(400).json({message: 'Request not complete'})
    }
    const new_table = await table_schema.create({
      chairs_amount: chairs_amount,
      room_location: room_location,
      table_model: table_model
    })
    res.status(200).json({message: 'New table successfully created', data: new_table})
  } catch (error) {
    return res.status(500).json({message: 'something went wrong.', error: error})
  }
}

// Update user password punction

// Update user profile function

// Deactivate user profile function