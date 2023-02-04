// Import NPM package
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import multer from 'multer'
import bodyParser from 'body-parser'

// Import local package
import users_routes from './routes/users-routes.js'

//Port set
dotenv.config()
const port = process.env.PORT

//Connection String
const db_conn = process.env.DB_CONN

//Multer to retreive formdata
// const upload = multer()

//Express and Cors
const app = express()
// app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(upload.array()) // for parsing form data
// app.use(express.)

//Routes
app.get('/', (req, res) => {
  res.send("Wellcome to rent-restaurant-table")
})
app.use('/api/users/',  users_routes)
// app.use('/api/rent-table', /*to do*/ )
// app.use('/api/table-list', /*to do*/ )

// Connecting Mongoose and run server on given port
mongoose.set('strictQuery', false)

mongoose.connect(db_conn, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
.catch((error) => console.log(error.message))
