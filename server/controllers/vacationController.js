const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Vacation = require('../model/vacation');
const { isNullIn, Response, } = require('../utils/validation');

function validateVacation(req, res, next) {

    const { description, destination, image, startDate, endDate, price, followersAmount } = req.body;

    if (isNullIn(description, destination, image, startDate, endDate, price)) {
        return res.json(
            new Response(
                false,
                'Request body must contains ' +
                'description, destination, image, startDate, endDate & price.',
                null
            )
        )
    }

    next()
};

router.post('/add-vacation', validateVacation, (req, res) => {

    const { description, destination, image, startDate, endDate, price, followersAmount } = req.body;

    const vacation = new Vacation({
        _id: mongoose.Types.ObjectId(),
        description,
        destination,
        image,
        startDate,
        endDate,
        price,
        followersAmount,
    })

    vacation.save()
        .then(response => res.json(
            new Response(
                true,
                '',
                null
            )
        ))
        .catch(err => res
            .status(500)
            .send(new Response(false, err, null))
        )
});


module.exports = router;