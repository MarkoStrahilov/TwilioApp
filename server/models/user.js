const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isDisabled: {
        type: Boolean,
        default: false
    },
    factorAuthentincationEmail: {
        type:String,
        default: undefined
    },
    factorAuthentincationPhone: {
        type: String,
        default: undefined
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }],
    planActive: {
        type: Boolean,
        default: false
    },
    plan: {
        type: Schema.Types.ObjectId,
        ref: "Plan",
        default: undefined
    },
    passwordResetToken: String,
    passwordResetExpires: Date
}, { timestamps: true })

userSchema.plugin(passportLocalMongoose)

userSchema.methods.createPasswordResetToken = async function() {

    const otp = `${Math.floor(Math.random() * 1000000000000000)}`
    const hashedOtp = await bcrypt.hash(otp, 12)

    this.passwordResetToken = hashedOtp
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return otp
}

// jwt token for cookie
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY || "urkjrsdiowqeol3489dfh&^&vh", {
      expiresIn: process.env.JWT_EXPIRES || "7d",
    });
  };


const User = mongoose.model('User', userSchema)
module.exports = User