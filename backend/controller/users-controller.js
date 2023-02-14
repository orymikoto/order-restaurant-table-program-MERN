// Import NPM package
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import fs from "fs"

dotenv.config()
// Import local package
import user_model from '../data/model/users.js'

// Get all active users
export const get_active_users = async (req, res) => {
  try {
    const users = await user_model.find({user_active: true})
    return res.status(200).json({message: 'All users data retrieved', data: users})
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error})
  }
}

// Get all Users
export const get_all_users = async (req, res) => {
  try {
    const users = await user_model.find({})
    return res.status(200).json({message: 'All users data retrieved', data: users})
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error})
  }
} 

// Sign-in / Login function
export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const existing_user = await user_model.findOne({ email: email })
    if(!existing_user){
      return res.status(404).json({message: "User doesn't exist"})
    }
    const is_password_correct = await bcrypt.compare(password, existing_user.password)
    if(!is_password_correct){
      return res.status(400).json({message: "Invalid credentials"})
    }

    const token = jwt.sign({ email: existing_user.email, name: existing_user.name, country: existing_user.country, city: existing_user.city, phone_number: existing_user.phone_number}, process.env.SECRET, { expiresIn: "3h"})
    res.status(200).json({ message: `Login is success, wellcome ${existing_user.name}`, email: existing_user.email, name: existing_user.name, token})
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error})
  }
}

// Sign-up / Register function
export const register = async (req, res) => {
  const { name, email, password, confirm_password, country, city, phone_number } = req.body
  try {
    const existing_user = await user_model.findOne({ email: email})

    if(existing_user) return res.status(400).json({ message: "User already exist" })
    if(password !== confirm_password) return res.status(400).json({ message: "password don't match" })

    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await user_model.create({ email, password: hashedPassword, name: name, country: country, city: city, phone_number: phone_number })
    const token = jwt.sign({ email: result.email, name: result.name, country: result.country, city: result.city, phone_number: result.phone_number}, process.env.SECRET, { expiresIn: "3h"})

    res.status(200).json({ email: result.email, name: result.name, message: 'users sucessfully created, you will be redirected to Home Page', token})

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error })
  }
}

// Get user profile

export const get_user_profile = async (req, res) => {
  try {
    const token = jwt.decode(req.headers['authorization'].split(" ")[1])
    const user_profile = await user_model.findOne({email: token.email}, {
      _id: 0,
      password: 0,
    })
    if (!user_model) {
      return res.status(404).json({message: "Your data not found try to re-login!"})
    }
    return res.status(200).json({message: 'get user profile is success!', data: user_profile})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error })
  }
}

// Update user password punction
export const password_update = async (req, res) => {
  const {password, new_password, confirm_new_password} = req.body
  const token = jwt.decode(req.headers['authorization'].split(" ")[1])
  try {
    if(confirm_new_password != new_password){
      return res.status(400).json({message: "New password not match"})
    }
    
    const user = await user_model.findOne({email: token.email})
    const check_password = await bcrypt.compare(password, user.password)
    if(!check_password){
      return res.status(400).json({message: "old password wrong"})
    }

    const encrypt_password = await bcrypt.hash(new_password, 12)
    await user_model.updateOne({email: token.email}, {
        password: encrypt_password,
    })

    return res.status(200).json({message: "password successfully updated"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "something went wrong", error: error})
  }
}

// Update user profile function
export const update_profile = async (req, res) => {
  const {email, country, city, name, phone_number} = req.body
  try {
    const user_update = await user_model.findOneAndUpdate({email: email}, {
      country: country,
      city: city,
      name: name,
      phone_number: phone_number
    })
    return res.status(200).json({ message: 'user successfully updated', data: {name: user_update.name, country: user_update.country, city: user_update.city, phone_number:  user_update.phone_number }})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'something went wrong', error: error})
  }
}

// Get table ordered populated
export const get_table_order = async (req, res) => {
  try {
    const user_info = jwt.decode(req.headers['authorization'].split(" ")[1])
    const user = await user_model.findOne({email: user_info.email}).select('table_ordered -_id').populate({path: 'table_ordered', populate: { path: 'table_id'}, options: {sort: {'rent_time.start': -1 }}})
    if(!user){
      return res.status(404).json({message: 'User not found please re-login'})
    }
    return res.status(200).json({message: 'User table order is retrieved sucessfully', data: user})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'something went wrong', error: error})
  }
}

export const upload_picture = async (req, res) => {
  try {
    await user_model.updateOne({email: req.body.email}, {
      profile_picture: {
        data: fs.readFileSync(('./frontend/public/images/' + req.file.filename)),
        contentType: req.file.mimeType
      }
    })
    return res.status(200).json({message: 'successfully update image', name: req.file.filename, email: req.body.email})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'something went wrong', error: error})
  }
}

// Deactivate user profile function
export const deactivate_user = async (req, res) => {
  try {
    const token = jwt.decode(req.headers['authorization'].split(" ")[1])
    const target_user = await user_model.updateOne({email: token.email}, {
      user_active: false
    })

    return res.status(200).json({message: 'User account deactivate', user_email: target_user.email})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'something went wrong', error: error})
  }
}