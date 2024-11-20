const podcastUpload = require("../models/uploadPodcaste");

exports.createPodcasteControllers = async (req, res, next) => {
    let reqBody = ["userId", "podcastName", "podcastDescriptions", "isMedia", "podcastCategory", "episodeName", "episodeDescription"]
    let missinField = reqBody.filter((_) => {
        if (!req.body[_])
            return _;
    })
    if (missinField.length > 0) {
        return res.json({ status: 401, message: "Missing field!" })
    }
    try {
        if (!req.files.length) {
            return res.json({ status: 200, message: "Podcast files missing!" })
        }
        let podcastImage = req.files[0].filename;
        let episodeFileName = req.files[1].filename;
        await podcastUpload.create({ ...req.body, podcastImage, episodeFileName })
        return res.json({ status: 200, message: "Podcast created!" })
    } catch (error) {
        next(error)
    }
}

