const Plan = require('../models/plans');
const User = require('../models/user')
const randomstring = require("randomstring");

module.exports.userPlans = async(req, res) => {

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

        if (foundUser.planActive === true) {

            return res.status(400).send({
                status: 'fail',
                message: "curently there is an active subscription"
            })

        }

        const newPlan = new Plan({
            status: 'active',
            key: randomstring.generate(),
            userId: foundUser._id,
            name: req.query.name,
        })

        if (newPlan.name === "Hobby") {

            newPlan.priceInUSD = 2.50
            newPlan.credits = 50

        } else if (newPlan.name === "Growth") {

            newPlan.priceInUSD = 5
            newPlan.credits = 100

        } else if (newPlan.name === "Scale") {

            newPlan.priceInUSD = 7.50
            newPlan.credits = 150

        } else {

            return res.status(404).send({
                status: 'fail',
                message: "sorry the subscription you are trying to activate does not exist yet"
            })

        }


        await User.updateOne(foundUser, { $set: { planActive: true } }, { runValidators: true })
        foundUser.plan = newPlan._id;

        await newPlan.save();
        await foundUser.save()

        return res.status(200).send({
            status: "success",
            message: `pricing plan ${newPlan.name} was unlocked`,
            data: { foundUser }
        })

    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: error.message
        })

    }

}