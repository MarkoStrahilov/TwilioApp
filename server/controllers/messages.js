const User = require("../models/user")
const Message = require("../models/message")
const Plan = require("../models/plans")


module.exports.sendMessage = async(req, res) => {

    try {

        const foundUser = await User.findOne({ _id: req.query.user })

        if (!foundUser) {

            return res.status(404).send({
                status: 'fail',
                message: "can't find account",
            });

        }

        if (foundUser.isVerified === false) {

            return res.status(400).send({
                status: 'fail',
                message: "account is not verified"
            })

        }

        if (foundUser.planActive === true) {

            return res.status(400).send({
                status: 'fail',
                message: "please activate a plan to send messages"
            })

        }

        const newMessage = new Message({
            userId: foundUser._id,
            heading: req.body.subject,
            text: req.body.message,
            createdAt: Date.now()
        })

        await newMessage.save()

        await User.updateOne(foundUser, { $push: { messages: newMessage } })

        return res.status(200).send({
            status: "success",
            message: "endpint was hit",
            data: { newMessage, foundUser }
        })


    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: error.message
        })

    }

}