const userModel = require("../models/register")

exports.userProfileController = async (req, res, next) => {
    let { userId } = req.body;
    if (!userId) {
        return res.json({ status: 400, message: "userId missing!" })
    }
    try {
        let userProfile = await userModel.findOne({ _id: userId }).select("-password -token");
        if (!userProfile) {
            return res.json({ status: 404, message: "No such user profile found!" })
        }
        return res.json({ status: 200, message: "user profile!", userProfile })
    } catch (error) {
        next(error)
    }
}

exports.profileUploadControllers = async (req, res) => {
    let { userId } = req.body
    if (!userId) {
        return res.json({ status: 400, message: "Userid missing!" })
    }
    if (!req.file) {
        return res.json({ status: 400, message: "Profile photo missing!" })
    }
    try {
        await userModel.findOneAndUpdate({ _id: userId }, { profilePhoto: req.file.filename })
        res.json({ status: 200, message: "Profile photo updated!", profilePhoto: req.file.filename })
    } catch (error) {
        next(error)
    }
}