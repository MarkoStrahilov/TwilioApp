const User = require("../models/user");
const SupportTicket = require('../models/contactSupport');
const sendEmail = require('../utils/sendEmail');

module.exports.contact = async (req, res) => {
    try {

        const { email, message, name } = req.body

        if (!email || !message) {

            return res.status(404).send({
                status: 'fail',
                message: "please fill the required fields",
            });

        }

        const foundUser = await User.findOne({ email: email })

        if (!foundUser) {

            return res.status(404).send({
                status: 'fail',
                message: "can't find account",
            });

        }

        const messageFromSupport = `
        Hello There ${foundUser.username}, hoppefully you are having a great day. \n

        This is a follow up email, for your recent submition. \n
        We will get back to you as soon as we see your message, with a solution to your problem. \n
        
        Best regards, Support Team.
        `

        const newTicket = new SupportTicket({
            fromUser: foundUser._id,
            message: message
        })

        await newTicket.save()

        sendEmail({
            email: email,
            subject: "Support",
            text: messageFromSupport
        })

        const ticket = await SupportTicket.findOne({ _id: newTicket._id }).populate("fromUser")

        res.status(200).send({
            status: "success",
            message: "Thanks for contacting us, we will reply as soon as possible",
            data: { ticket }
        })

    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: error.message
        })

    }
}