const User = require("../models/User");

exports.uploadAvatar = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                avatar: req.file.path,
            },
            
        ).select("-password");

        res.json(user);

    } catch(error) {
        res.status(500).json({
            message: "Upload failed"
        });
    }
};