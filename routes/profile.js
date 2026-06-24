const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const uploadAvatarMiddleware = require("../middleware/uploadAvatar");
const { getProfile } = require("../controllers/profileController");
const { updateProfile } = require("../controllers/updateProfileControllers");
const { uploadAvatar } = require("../controllers/avatarController");

router.get("/", auth, getProfile);
router.put("/", auth, updateProfile);
router.post("/avatar", auth, uploadAvatarMiddleware.single("avatar"), uploadAvatar);

module.exports = router;