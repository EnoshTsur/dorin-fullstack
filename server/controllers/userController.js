const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const User = require('../model/user')
const { isNullIn, isEqualsValues, Response, } = require('../utils/validation')
const { MD5, } = require('crypto-js')
const jwt = require('jsonwebtoken')
const { secret, adminSecret, adminUsername, adminPassword } = require('../keys/app-keys')

const INVALID_ATTRIBUTES = 'Invalid username or password'

function validateLogin(req, res, next) {

    const { username, password, } = req.body

    if (isNullIn(username, password)) {
        return res.json(

            new Response(
                false,
                'Request body must contains ' +
                'username & password.',
                null
            )
        )
    }

    next()

}

function validateUser(req, res, next) {

    const { firstName, lastName, username, password, } = req.body

    if (isNullIn(firstName, lastName, username, password)) {

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
            .then(_ => jwt.sign(user.toJSON(), secret, (err, token) => res.json(
                new Response(
                    true,
                    '',
                    token
                )
            )))
            .catch(err => res
                .status(500)
                .send(new Response(false, err, null))
            )

    })

})

router.post('/login', validateLogin, (req, res) => {

    const { username, password } = req.body

    User.find({ username, password: MD5(password).toString() },
        (err, existUser) => {

            if (err || existUser.length === 0) {

                return res.json(

                    new Response(
                        false,
                        INVALID_ATTRIBUTES,
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

router.post('/adminlogin', validateLogin, (req, res) => {

    const { username, password } = req.body
    const user = { username, password, }

    return isEqualsValues(username, password)(adminUsername, adminPassword) ?

        jwt.sign(user, adminSecret, (err, token) => {

            return res.json(

                new Response(
                    true,
                    '',
                    token
                )
            )
        }) : res.json(new Response(false, INVALID_ATTRIBUTES))

})

router.get('/adminResource', verifyToken(adminSecret), (req, res, next) => {
    return res.json({ admin: true, })
})

router.get('/customerResource', verifyToken(secret), (req, res, next) => {
    return res.json({ customer: true, })
})


function verifyToken(secret) {
    return (req, res, next) => {
        const bearerHeader = req.headers['authorization']

        if (!bearerHeader) {
            return res.sendStatus(403)
        }

        const bearer = bearerHeader.split(' ')
        const token = bearer[1]
        req.token = token
        try {

            const user = jwt.verify(token, secret)
            return next()

        } catch (error) {
            return res.json({ error, })
        }
    }
}


module.exports = router
