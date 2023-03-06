const User = require("../models/user")
const Message = require("../models/message")
const Plan = require("../models/plans")

module.exports.sendMessage = async (req, res) => {

    try {

        const foundUser = await User.findOne({ _id: req.query.id }).populate("plan")

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

        if (foundUser.planActive === false) {

            return res.status(400).send({
                status: 'fail',
                message: "please activate a subscripton to send messages"
            })

        }

        const foundPlan = await Plan.findOne({ _id: foundUser.plan._id });

        if (foundPlan.credits === 0) {

            await User.updateOne(foundUser, { $set: { planActive: false } })
            await Plan.updateOne(foundPlan, { $set: { status: "not active" } })
            await User.updateOne(foundUser, { $set: { plan: undefined } })

            return res.status(403).send({
                status: 'fail',
                message: "you don't have any credits left, please upgrade your subscription"
            })

        }

        const newMessage = new Message({
            status: "success",
            toPhoneNumber: req.body.phone,
            userId: foundUser._id,
            heading: req.body.subject,
            text: req.body.message,
            createdAt: Date.now()
        })

        if (!foundPlan) {

            return res.status(404).send({
                status: 'fail',
                message: "no plan was found, please upgrade your subscription"
            })

        }

        await Plan.updateOne({ _id: foundPlan._id }, { $inc: { credits: -1 } })

        await newMessage.save()

        await User.updateOne(foundUser, { $push: { messages: newMessage } })

         res.status(200).send({
            status: "success",
            message: "message was successfuly send",
            data: { newMessage, foundUser }
        })

        return sendMessageWithTwilio({
            text: req.body.message,
            number: req.body.phone
        })

    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: error.message
        })

    }

}

module.exports.sendMessageWithApi = async (req, res) => {

    try {

        const foundPlan = await Plan.findOne({ key: req.query.key })
        const foundUser = await User.findOne({ _id: foundPlan.userId })

        return res.status(200).send({
            status: "success",
            message: "message was successfuly send",
            data: { user: foundUser }
        })

    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: error.message
        })

    }

}