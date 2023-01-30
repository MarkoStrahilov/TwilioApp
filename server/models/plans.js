const mongoose = require('mongoose');

const Schema = mongoose.Schema

const planSchema = new Schema({
    status: {
        type: String,
        default: "not active"
    },
    key: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        default: "Standard Plan"
    },
    priceInUSD: {
        type: Number,
        default: 0
    },
    credits: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const Plan = mongoose.model("Plan", planSchema);
module.exports = Plan;