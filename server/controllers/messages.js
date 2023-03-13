require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const User = require("../models/user")
const Message = require("../models/message")
const Plan = require("../models/plans")

const sendMessageWithTwilio = async({text,number}) => {

    await client.messages
    .create({
        body: text,  
        messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,      
        to: number
    })
    .then(message => console.log(message.sid))
    .done();

}

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

        const {message,phone} = req.body;

        if(!message || !phone) {

            return res.status(400).send({
                status: 'fail',
                message: "please fill out all the required fields"
            })

        }

        const foundPlan = await Plan.findOne({ key: req.query.key })
        const foundUser = await User.findOne({ _id: foundPlan.userId })

        if(!foundUser || !foundPlan) {

            return res.status(404).send({
                status: 'fail',
                message: "plan does not exist, please check your api key"
            })

        }
        
        if (foundUser.planActive === false) {

            return res.status(400).send({
                status: 'fail',
                message: "please activate a subscripton to send messages"
            })

        }

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
            toPhoneNumber: phone,
            userId: foundUser._id,
            text: message,
            createdAt: Date.now()
        })

        await Plan.updateOne({ _id: foundPlan._id }, { $inc: { credits: -1 } })

        await newMessage.save()

        await User.updateOne(foundUser, { $push: { messages: newMessage } })


        return res.status(200).send({
            status: "success",
            message: "message was successfuly send",
            data: { 
                fromUser: foundUser._id,
                creditsRemaining: foundPlan.credits - 1, 
                message: message,
                toPhoneNumber: phone
            }
        })

    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: error.message
        })

    }

}