const podcastUpload = require("../models/uploadPodcaste");



// your upload =>
exports.yourUploadPodcastLists = async (req, res) => {
    let { userId } = req.body
    if (!userId) {
        return res.json({ status: 400, message: "userId missing!" })
    }
    try {
        let podcastLists = await podcastUpload.find({ userId }).populate(
            [
                {
                    path: "userId",
                    select: "-password -token -email"
                }
            ]
        )
        if (!podcastLists.length) {
            return res.json({ status: 200, message: "You have not uploaded a podcast!" })
        }
        res.json({ status: 200, message: "Your podcast lists!", podcastLists })
    } catch (error) {
        next(error)
    }
}


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