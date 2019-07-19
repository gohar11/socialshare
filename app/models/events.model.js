const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    event_title: {
        type: String,
        trim: true,
        required: [true, 'Event title cannot be empty'],
    },
    event_img: {
        type: String,
        trim: true,
        required: [true, 'Event image cannot be empty'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

}, {
    timestamps: true
});


module.exports = mongoose.model('events', EventSchema);