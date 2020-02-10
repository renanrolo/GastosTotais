const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true, },
    password: { type: String, min: 6, max: 12, required: true }
});

module.exports = mongoose.model('user', userSchema)
