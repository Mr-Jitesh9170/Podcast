const { Router } = require("express");
const { signUpControllers, signInControllers, logoutControllers } = require("../controllers/authControllers");


const router = Router();

router.post("/podcast/user/sign-up", signUpControllers);
router.post("/podcast/user/sign-in", signInControllers)
router.post("/podcast/user/logout", logoutControllers)



module.exports = router;