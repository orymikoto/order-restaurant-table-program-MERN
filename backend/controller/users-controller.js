// Import NPM package
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import fs from "fs"

dotenv.config()
// Import local package
import user_model from '../data/model/users.js'
import formidable from "formidable"

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

    const token = jwt.sign({ email: existing_user.email, id: existing_user._id}, process.env.SECRET, { expiresIn: "3h"})
    res.status(200).json({ email: existing_user.email, name: existing_user.name, token})
  } catch (error) {
    res.status(500).json({ message: "Something went wrong"})
  }
}

// Sign-up / Register function
export const register = async (req, res) => {
  const { name, email, password, confirm_password, address} = req.body
  console.log("masuk");
  try {
    const existing_user = await user_model.findOne({ email: email})

    if(existing_user) return res.status(400).json({ message: "User already exist" })
    if(password !== confirm_password) return res.status(400).json({ message: "password don't match" })

    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await user_model.create({ email, password: hashedPassword, name: name, address: address})
    const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET , { expiresIn: "3h" })

    res.status(200).json({ email: result.email, name: result.name, message: 'users sucessfully created', token})

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" })
  }
}

// Update user password punction
export const password_update = async (req, res) => {
  const {email, new_password, confirm_new_password} = req.body
  // const sentToken = req.body.token
  try {
    if(confirm_new_password != new_password){
      return res.status(400).json({message: "password not match"})
    }
    const encrypt_password = await bcrypt.hash(new_password, 12)
    await user_model.updateOne({email: email}, {
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
  const {email, address} = req.body
  // const file = req.files.upload
  const filepath = `./frontend/public/${file.name}`
  const form = new formidable.IncomingForm()
  try {
    form.uploadDir = filepath
    form.parse(req, async (err, fields, files) => {
      if (err) res.send("Error parsing the files")
      const file = files.upload
      const fileName = file.originalFilename
      fs.renameSync(file.filepath, path.join(filepath, fileName))
      res.redirect("/")
    })
  } catch (error) {
    
  }
}

// Deactivate user profile function