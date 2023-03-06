const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const contactSupportSchema = new Schema({
    fromUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    message: {
        type: String,
        default: undefined
    }
}, {timestamps: true})

const SupportTicket = mongoose.model('SupportTicket', contactSupportSchema);
module.exports = SupportTicket