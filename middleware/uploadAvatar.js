const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "uploads/avatars");
    },

    filename: (req, res, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const uploadAvatar = multer({storage});

module.exports = uploadAvatar;