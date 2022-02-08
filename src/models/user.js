const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const { Int32 } = require('mongodb')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    marialStatus: {
        type: String,
        required: true
    },
    regitrationNumber: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        required: true
    }
    
})


const User = mongoose.model('User', userSchema)

module.exports = User