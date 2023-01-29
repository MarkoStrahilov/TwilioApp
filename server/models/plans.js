const mongoose = require('mongoose');

const Schema = mongoose.Schema

const planSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        default: "Standard Plan"
    },
    price: {
        type: Number,
        default: 0,
    },
    credits: {
        type: Number,
        default: 0,
    }
}, { timestamps: true })

const Plan = mongoose.model("Plan", planSchema);
module.exports = Plan;