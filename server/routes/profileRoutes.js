const { Router } = require("express");
const { userProfileController, profileUploadControllers } = require("../controllers/profileControllers");
const { profileUploads } = require("../middleware/multer");


const router = Router();

router.post("/podcast/user-profile", userProfileController)
router.post("/podcast/profile-update", profileUploads.single("profilePhoto"), profileUploadControllers)


module.exports = router;