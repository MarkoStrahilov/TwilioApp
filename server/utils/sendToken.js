// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();

    // Options for cookies
    const options = {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        useCredentials: true
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    });
};

module.exports = sendToken;