const User = require("../models/user");
const Message = require("../models/message");
const jwt = require("jsonwebtoken");

module.exports.getCurrentUser = async (req, res) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).send({
                status: "fail",
                message: "Unauthorized, please sign in or register a new account",
            });
        } else {
            const decodedData = jwt.verify(
                token,
                process.env.JWT_SECRET_KEY || "urkjrsdiowqeol3489dfh&^&vh"
            );

            const foundUser = await User.findOne({ _id: decodedData.id }).populate("messages").populate('plan');
            const messages = await Message.find({ _id: { $in: foundUser.messages } }).limit(5).sort({ createdAt: -1 })

            return res.status(200).send({
                status: "success",
                message: "Fetching user data",
                data: { user: foundUser, messages },
            });
        }
    } catch (error) {
        return res.status(400).send({
            status: "fail",
            message: error.message,
        });
    }
};

module.exports.fetchUser = async (req, res) => {

    try {
        const foundUser = await User.find({ _id: req.query.id })
            .populate("plan")
            .populate("messages").limit(5);

        if (!foundUser) {
            return res.status(404).send({
                status: "fail",
                message: "Can't find user",
            });
        }

        return res.status(200).send({
            status: "success",
            message: "Fetching user data",
            data: { user: foundUser },
        });

    } catch (error) {
        return res.status(400).send({
            status: "fail",
            message: error.message,
        });
    }
};

module.exports.updatePassword = async (req, res) => {

    try {

        const foundUser = await User.findOne({ _id: req.query.id })

        const { oldPassword, newPassword, retypeNewPassword } = req.body


        if (newPassword !== retypeNewPassword) {

            return res.status(406).send({
                status: "fail",
                message: "passwords don't match"
            })

        }

        if (newPassword.length <= 7 || newPassword.indexOf(" ") !== -1) {

            return res.status(400).send({
                status: "fail",
                message: 'the new password must be longer then 6 characters and should not contain any spaces',
            })

        }

        foundUser.changePassword(oldPassword, retypeNewPassword, async function (err) {

            if (err) {

                return res.status(406).send({
                    status: "fail",
                    message: "the old password you entered is incorrect"
                });

            } else {

                await foundUser.save()

                return res.status(200).send({
                    status: "success",
                    message: "password reset was successful",
                    data: { foundUser }
                })
            }
        });

    } catch (error) {

        return res.status(400).send({
            status: "fail",
            message: error.message,
        });

    }

}

module.exports.updateUser = async (req, res) => {

    try {
        const foundUser = await User.findOne({ _id: req.query.id })


        // if(req.body.username !== '' && req.body.email === '') {
        //     await User.updateOne(foundUser, {username: username},{ runValidators: true })
        // }

        // if(req.body.username === '' && req.body.email !== '') {
        //     await User.updateOne(foundUser, {email: email},{ runValidators: true })
        // }

        await User.updateOne(foundUser, req.body, { runValidators: true, new: true })

        await foundUser.save()

        return res.status(200).send({
            status: "success",
            message: "user information was updated",
            data: { foundUser }
        })

    } catch (error) {

        return res.status(400).send({
            status: "fail",
            message: error.message,
        });

    }
}

module.exports.twoFactorAuthentication = async (req, res) => {

    try {

        const foundUser = await User.findOne({ _id: req.query.id });

        const { email, phone } = req.body;

        if (email === '' || phone === '') {
            if (email !== '' && phone === '') {
                await User.updateOne(foundUser, { factorAuthentincationEmail: email }, { runValidators: true })
            } else if (email === '' && phone !== '') {
                await User.updateOne(foundUser, { factorAuthentincationPhone: phone }, { runValidators: true })
            }
        } else {
            await User.updateOne(foundUser, req.body, { runValidators: true, new: true })
        }

        await foundUser.save()

        return res.status(200).send({
            status: "success",
            message: "user information was updated",
            data: { foundUser }
        })

    } catch (error) {

        return res.status(400).send({
            status: "fail",
            message: error.message,
        });

    }

}

module.exports.deleteUser = async (req, res) => {
    try {
        const foundUser = await User.findOne({ _id: req.query.id });

        if (!foundUser) {
            return res.status(404).send({
                status: "fail",
                message: "Can't find user",
            });
        }

        if (foundUser.isVerified === false) {
            return res.status(400).send({
                status: "fail",
                message: "Account is not verified, please verify your account to continue with this action",
            });
        }

        const findAndDelete = await User.findOneAndDelete({ _id: foundUser._id });

        if (findAndDelete) {
            return res.status(200).send({
                status: "success",
                message: "Account was successfuly deleted",
            });
        }
    } catch (error) {
        return res.status(400).send({
            status: "fail",
            message: error.message,
        });
    }
};

module.exports.disableAccount = async (req, res) => {
    try {
        const foundUser = await User.findOne({ _id: req.query.id });

        if (!foundUser) {
            return res.status(404).send({
                status: "fail",
                message: "Cannot find account",
            });
        }

        if (foundUser.isDisabled === true) {
            return res.status(400).send({
                status: "fail",
                message: "account has been previously disabled",
            });
        } else {
            await User.updateOne({ _id: foundUser._id }, { $set: { isDisabled: true } });
        }

        return res.status(200).send({
            status: "success",
            message: "account was successfuly disabled",
            data: { foundUser },
        });
    } catch (error) {
        const { message } = error;

        return res.status(400).send({
            status: "fail",
            message: message,
        });
    }
};