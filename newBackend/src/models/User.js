const mongoose = require('mongoose');
const {models} = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: [true, "Username is required"] },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
    celphone: { type: String, required: [true, "Celphone is required"] },
    verified: {type: Boolean, default: false},
    token: String,
    createdAt: { type: Date, default: Date.now },
})

UserSchema.path('email').validate({
    validator: async function(email) {
        const user = await models.User.findOne({email});
        return !user;
    },
    message: `The user already exists!`,
})

UserSchema.path('username').validate({
    validator: async function(username) {
        return username.length < 12;
    },
    message: `The username length cant be greater than 12 characters!!`,
})

module.exports = mongoose.model('User', UserSchema)
