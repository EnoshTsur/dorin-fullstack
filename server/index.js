const express = require('express')
const app = express()

const mongoose = require('mongoose')
const { db, } = require('./keys/app-keys')

const cors = require('cors')
const bodyParser = require('body-parser')

const userController = require('./controllers/userController')


app.use(cors())
app.use(bodyParser.json())

app.use('/user', userController)

mongoose.connect(db)

const PORT = process.env.PORT || 5001


app.listen(PORT, () => 
    console.log(`Started at ${new Date()} on port: ${PORT}`))

