const userModel = require("../models/register.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.signUpControllers = async (req, res) => {
    let { name, email, password } = req.body;
    try {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isEmail = emailPattern.test(email);
        if (!isEmail) {
            return res.json({ status: 200, message: "Email is not valid!" });
        }
        let user = await userModel.findOne({ email });
        if (user) {
            return res.json({ status: 200, message: "User already exists!" });
        }
        const saltRounds = 10;
        password = await bcrypt.hash(password, saltRounds);
        await userModel.create({ name, email, password });
        res.json({ status: 201, message: "User sign up successfully!" })
    } catch (error) {
        console.log(error, "<--- error in signup controllers!")
        res.json({ status: 500, message: "Internal server error!" })
    } 
}

exports.signInControllers = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ status: 200, message: "User does not exists!" })
        }
        let isPassword = bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.json({ status: 200, message: "User password is wrong!" })
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ status: 200, message: "User sign in successfully!", token })
    } catch (error) {
        console.log(error, "<--- error in sign controllers!")
        res.json({ status: 500, message: "Internal server error!" })
    }
}