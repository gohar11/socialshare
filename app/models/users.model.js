const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name cannot be empty'],
    },
    phone: {
        type: Number,
        trim: true,
        required: [true, 'Phone cannot be empty'],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('users', UserSchema)