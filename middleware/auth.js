const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {
    try {
        console.log("HEADER: ", req.headers.authorization);
        const authHeader = req.headers.authorization;

        if(!authHeader) {
            return res.status(401).json({
                message: "No authorization header."
            });
        }
        const token = authHeader.split(" ")[1];


        if(!token) {
            return res.status(401).json({
                message: "No token"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET,
        );

        console.log("AUTH USER: ", decoded);
        req.user = decoded;
        next();

    } catch(error) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = auth;