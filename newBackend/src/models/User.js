const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    celphone: { type: String, required: true },
    verified: {type: Boolean, default: false},
    token: String,
    createdAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model('User', UserSchema)