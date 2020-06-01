const mongoose = require('mongoose')

const vacationSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    description: String,
    destination: String,
    image: String,
    startDate: Date,
    endDate: Date,
    price: Number,
    followersAmount: Number,
    
})

module.exports = mongoose.model('Vacation', vacationSchema)
