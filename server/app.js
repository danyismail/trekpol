const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const Mongoose = require('mongoose')
Mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true})
    .then((()=>{
        console.log('Mongoo connected')
    }))
    .catch((err)=>{
        console.log(err.name)
    })

const UserRoute = require('./route/UserRoute')
app.use('/users', UserRoute)
app.listen(`${port}`,console.log(`Hello World from ${port}`))


