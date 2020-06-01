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

/*
function verifyToken(req, res, next){
   const bearerHeader = req.headers['authorization']
   
    if (!bearerHeader) {
        
        return res.sendStatus(403)

    }

    const bearer = bearerHeader.split(' ')
    const token = bearer[1]
    req.token = token
    next();

    
}
*/
