const mongoose = require('mongoose')

const MemberSchema = mongoose.Schema({
    member_name: {
        type: String,
        trim: true,
        required: [true, 'Event title cannot be empty'],
    },
    status: {
        type: Boolean,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'events'
    },

}, {
    timestamps: true
});


module.exports = mongoose.model('members', MemberSchema);