const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    toPhoneNumber: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    heading: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    }
}, { timestamps: true })

const Message = mongoose.model("Message", messageSchema);
module.exports = Message