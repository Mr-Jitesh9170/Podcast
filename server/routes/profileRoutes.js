const { Router } = require("express");
const { userProfileController } = require("../controllers/profileControllers");


const router = Router();

router.post("/podcast/user-profile", userProfileController)

module.exports = router;