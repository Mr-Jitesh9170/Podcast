const { Router } = require("express");
const { signUpControllers, signInControllers } = require("../controllers/authControllers");


const router = Router();

router.post("/podcast/user/sign-up", signUpControllers);
router.post("/podcast/user/sign-in", signInControllers)


module.exports = router;