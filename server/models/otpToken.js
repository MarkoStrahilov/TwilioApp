const mongoose = require('mongoose')
const Schema = mongoose.Schema

const otpTokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    otpSecret: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    }
})

const Token = mongoose.model('Token', otpTokenSchema)
module.exports = Token