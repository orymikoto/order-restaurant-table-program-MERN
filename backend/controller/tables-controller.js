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

    // Check empty field
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

// Update table function
export const update_table = async (req, res) => {
  try {
    const { table_id, chairs_amount, room_location, table_model} = req.body

    // Check empty field
    if (!table_id || !chairs_amount || !room_location || !table_model){ 
      return res.status(400).json({message: 'Request not complete'})
    }

    //check is table exist
    const check_table = await table_schema.findById({table_id})
    if (!check_table){
      return res.status(404).json({message: `Table with id ${table_id} not exist.`})
    }

    const updated_table = await table_schema.findByIdAndUpdate({table_id}, {
      chairs_amount: chairs_amount,
      room_location: room_location,
      table_model: table_model
    })

    return res.status(200).json({message: 'Table updated', data: updated_table})
  } catch (error) {
    return res.status(500).json({message: 'something went wrong.', error: error})
  }
}

// Soft Delete Table 
export const soft_delete_table = async (req, res) => {
  try {
    const table_id = req.body.table_id

    // check if table id field is not empty
    if (!table_id){ 
      return res.status(400).json({message: 'You need to fill table id information first!'})
    }

    //check is table exist
    const check_table = await table_schema.findById({table_id})
    if (!check_table){
      return res.status(404).json({message: `Table with id ${table_id} not exist.`})
    }

    const soft_deleted_table = await table_schema.findByIdAndUpdate({table_id}, {
      still_exist: false
    })

    return res.status(200).json({message: 'Table has been soft-deleted', data: soft_deleted_table})
  } catch (error) {
    return res.status(500).json({message: 'something went wrong.', error: error})
  }
}