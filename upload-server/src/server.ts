require('dotenv').config()

import routes from "./routes"

import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import path from 'path'
import cors from 'cors'

const app = express()

//Database setup
//@ts-ignore
mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.use(
    '/files', 
    express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
)

app.use(routes)

app.listen(3333)
