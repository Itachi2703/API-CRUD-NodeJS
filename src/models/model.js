const mongoose = require("mongoose");

const Personal_Schema = mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    country: {
        type: String
    },
    Adress: {
        type: Number
    },
    Jobs: {
        type: String,
        required: true
    },
    Added_in: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Personal", Personal_Schema)
