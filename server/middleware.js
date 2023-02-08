const jwt = require("jsonwebtoken");

module.exports.asyncErrorHandle = (fn) => {
    return function(req, res, next) {
        fn(req, res).catch((e) => next(e));
    };
};

module.exports.isLoggedIn = async(req, res, next) => {

    const { token } = req.cookies;

    if (!token) {
        return res.status(401).send({
            status: "fail",
            message: "Unauthorized, please sign in or register a new account",
        });
    }

    next();
};