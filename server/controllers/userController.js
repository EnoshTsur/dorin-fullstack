const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const User = require('../model/user')
const { isNullIn, Response, } = require('../utils/validation')
const { MD5, } = require('crypto-js')
const jwt = require('jsonwebtoken')
const { secret, } = require('../keys/app-keys')

function validateLogin(req, res, next) {

    const { username, password, } = req.body
    
    if(isNullIn(username, password)) {
        return res.json(
        
            new Response(
                false,
                'Request bosy must contains ' +
                'username & password.',
                null
            )
        )
    }

    next()

}

function validateUser(req, res, next) {

    const { firstName, lastName, username, password, } = req.body
   
    if(isNullIn(firstName, lastName, username, password)) {
    
        return res.json(

            new Response(
                false,
                'Request body must contains ' +
                'firstName, lastName, username & password.',
                null
            )
        )
    }

    next()
}

router.post('/register', validateUser, (req, res) => {

    const { username, firstName, lastName, password, } = req.body

    User.find({ username, }, (err, existUser) => {

        if (existUser.length > 0) {
        
           return res.json(
                new Response( 
                    false,
                    `User by the username: ${username} already exists`,
                    null
                )
            )
        }

        const user = new User({
        
            _id: mongoose.Types.ObjectId(),
            firstName,
            lastName,
            username,
            role: 'user',
            password: MD5(password).toString(),
        })

        user.save()
            .then(response => res
                .status(200)
                .send(new Response(true, '', user._id))
            )
            .catch(err => res
                .status(500)
                .send( new Response(false, err, null))
            )

    })

})

router.post('/login', validateLogin , (req, res) => {
  
    const { username, password} = req.body

    User.find({ username, password: MD5(password).toString()}, 
        (err, existUser) => {
    
        if(err || existUser.length === 0) {
        
            return res.json(
            
                new Response(
                    false,
                    "Invalid username or password",
                    null,
                )
            )
        }

        const user = existUser[0]

        jwt.sign(user.toJSON(), secret, (err, token) => {
    
             return res.json(
             
                 new Response(
                     true,
                     '',
                     token
                 )
             )        
        })
    })
        
})

module.exports = router
