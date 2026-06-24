const User = require("../models/User");

exports.updateProfile = async (req,res) => {
    try {
        const {name, bio, github, portfolio, skills} = req.body;

        const user = await  User.findByIdAndUpdate(
            req.user.id,
            {
                name, 
                bio, 
                github, 
                portfolio, 
                skills,
            },
            {
                new: true,
            },
        ).select("-password");

        res.json(user);

    } catch(error) {
        res.status(500).json({
            message: "Server Error"
        });
    }
};