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

export const get_exist_table = async (req, res) => {
  try {
    const all_tables = await table_schema.find({still_exist: true})
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
    // console.log(typeof(table_id));
    // Check empty field
    if (!table_id || !chairs_amount || !room_location || !table_model){ 
      return res.status(400).json({message: 'Request not complete'})
    }

    //check is table exist
    const check_table = await table_schema.findById(table_id)
    if (!check_table){
      return res.status(404).json({message: `Table with id ${table_id} not exist.`})
    }

    const updated_table = await table_schema.findByIdAndUpdate(table_id, {
      chairs_amount: chairs_amount,
      room_location: room_location,
      table_model: table_model,
    }, {new: true})

    return res.status(200).json({message: 'Table updated', data: updated_table})
  } catch (error) {
    console.log(error);
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
    const check_table = await table_schema.findById(table_id)
    if (!check_table){
      return res.status(404).json({message: `Table with id ${table_id} not exist.`})
    }

    const soft_deleted_table = await table_schema.findByIdAndUpdate(table_id, {
      still_exist: false
    })

    return res.status(200).json({message: 'Table has been soft-deleted', data: soft_deleted_table})
  } catch (error) {
    return res.status(500).json({message: 'something went wrong.', error: error})
  }
}

export const update_all = async (req, res) => {
  try {
    const name = {'st_mr': 0, 'mt_mr': 0, 'bt_mr': 0, 'mt_od': 0, 'vip': 0, 'meet': 0} 

    const find_name = (room, chairs_amount) => {
      if(room == 'main_room' && chairs_amount == 2){
        name['st_mr'] += 1
        return `st_mr_${name['st_mr']}`
      }
      else if(room == 'main_room' && chairs_amount == 4){
        name['mt_mr'] += 1
        return `mt_mr_${name['mt_mr']}`
      }
      else if(room == 'main_room' && chairs_amount == 6){
        name['bt_mr'] += 1
        return `bt_mr_${name['bt_mr']}`
      }
      else if(room == 'out_door' && chairs_amount == 4){
        name['mt_od'] += 1
        return `mt_od_${name['mt_od']}`
      }
      else if(chairs_amount == 8){
        name['vip'] += 1
        return `vip_${name['vip']}`
      }
      else if(chairs_amount == 11){
        name['meet'] += 1
        return `meet_${name['meet']}`
      }else {
        return 'unknown'
      }
    }

    const tables = await table_schema.find({})
    tables.forEach(async (i) => {
      let name = find_name(i.room_location, i.chairs_amount)
      console.log(name);
      await table_schema.updateOne({_id: i._id}, {
        $set: { name: name}
      })
    })
    const new_table = await table_schema.find({})
    return res.status(200).json({message: 'Update success hope this is right 4 you', data: new_table})
  } catch (error) {
    console.error(error);
    res.json(error)
  }
}