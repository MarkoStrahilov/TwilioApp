const Plan = require('../models/plans');

module.exports.userPlans = async(req, res) => {

    try {

        return res.status(200).send({
            status: "success",
            message: "endpint was hit",
            data: req.body
        })

    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: error.message
        })

    }

}
