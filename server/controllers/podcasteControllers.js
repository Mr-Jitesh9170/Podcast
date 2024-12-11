const podcastUpload = require("../models/uploadPodcaste");

// create podcaste =>
exports.createPodcasteControllers = async (req, res, next) => {
    for (const key in req.body) {
        if (!req.body[key]) {
            return res.json({ status: 200, message: `${key} missing!` })
        }
    }
    try {
        if (!req.files.length) {
            return res.json({ status: 200, message: "Podcast files missing!" })
        }
        let podcastImage = req.files[0].filename;
        let episodeFileName = req.files[1].filename;
        await podcastUpload.create({ ...req.body, episodeImgPath: podcastImage, episodeVideoPath: episodeFileName })
        return res.json({ status: 200, message: "Podcast created!" })
    } catch (error) {
        next(error)
    }
}