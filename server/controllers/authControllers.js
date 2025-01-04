const userModel = require("../models/register.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.signUpControllers = async (req, res, next) => {
    let { name, email, password } = req.body;
    try {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isEmail = emailPattern.test(email);
        if (!isEmail) {
            return res.status(400).json({ message: "Email is not valid!" });
        }
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists!" });
        }
        const saltRounds = 10;
        password = await bcrypt.hash(password, saltRounds);
        await userModel.create({ name, email, password });
        res.status(201).json({ message: "User sign up successfully!" })
    } catch (error) {
        next(error)
    }
}

const generateToken = (userData) => {
    let token = jwt.sign(userData, process.env.SECRET_KEY, { expiresIn: '7d' })
    return token;
}

exports.signInControllers = async (req, res, next) => {
    let { email, password } = req.body;
    try {
        let user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User does not exists!" })
        }
        let isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(400).json({ message: "User password is wrong!" })
        }
        const token = generateToken({ userId: user._id, name: user.name, email: user.email });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: 'None'
        });
        res.status(200).json({ message: "User sign in successfully!", userId: user._id })
    } catch (error) {
        next(error);
    }
}

exports.logoutControllers = async (req, res, next) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: false,
        });
        res.status(200).json({ message: "Logout successfully!" })
    } catch (error) {
        next(error);
    }
}