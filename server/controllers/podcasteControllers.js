const podcastUpload = require("../models/uploadPodcaste");
const favouritesPodModel = require("../models/favouritesPodcast")


// categor wise podcasts =>
exports.categoryWisePodlists = async (req, res) => {
    let { podcastCategory } = req.body;
    if (!podcastCategory) {
        return res.json({ status: 400, message: "Podcast category missing!" })
    }
    try {
        let podcastCategoryLists = await podcastUpload.find({ podcastCategory: { $regex: podcastCategory, $options: "i" } }).populate(
            [
                {
                    path: "userId",
                    select: "-password -token -email"
                }
            ]
        )
        if (!podcastCategoryLists.length) {
            return res.json({ status: 404, message: `No podcast related to ${podcastCategory.toLowerCase()} category!`, podcastCategoryLists: [] })
        }
        res.json({ status: 200, message: `${podcastCategory} lists!`, podcastCategoryLists })
    } catch (error) {
        next(error)
    } 
}

// add/remove favourite podcasts =>
exports.addOrRemoveFavouritePod = async (req, res, next) => {
    let { podcastId, isFavourite } = req.body
    if (!podcastId || typeof isFavourite !== "boolean") {
        return res.json({ status: 400, message: "Field missing!" })
    }
    let userId = req.user.userId;
    try {
        if (isFavourite) {
            await favouritesPodModel.create({ userId, podcastId })
            return res.json({ status: 201, message: "Added to your favourite lists!" })
        }
        await favouritesPodModel.findOneAndDelete({ userId, podcastId });
        res.json({ status: 200, message: "Removed from your favourite lists!" })
    } catch (error) {
        next(error)
    }
}

// your favourite podcast lists =>
exports.userFavouritesPodcastLists = async (req, res, next) => {
    let { userId } = req.body
    if (!userId) {
        return res.json({ status: 400, message: "Field missing!" })
    }
    try {
        let favritePodLists = await favouritesPodModel.find({ userId }).populate(
            [
                {
                    path: "podcastId",
                    populate: {
                        path: "userId",
                        select: "-password -email"
                    },
                }
            ]
        )
        if (!favritePodLists.length) {
            return res.json({ status: 404, message: "No favourite podcast found!" })
        }
        res.json({ status: 200, message: "Your favourite podcasts!", favritePodLists })
    } catch (error) {
        next(error)
    }
}


// your upload =>
exports.yourUploadPodcastLists = async (req, res, next) => {
    let { userId } = req.body
    if (!userId) {
        return res.json({ status: 400, message: "userId missing!" })
    }
    try {
        let podcastLists = await podcastUpload.find({ userId }).populate(
            [
                {
                    path: "userId",
                    select: "-password -token"
                }
            ]
        )
        if (!podcastLists.length) {
            return res.json({ status: 404, message: "You have not uploaded a podcast!" })
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
            return res.json({ status: 400, message: `${key} missing!` })
        }
    }
    try {
        if (!req.files.length) {
            return res.json({ status: 400, message: "Podcast files missing!" })
        }
        let podcastImage = req.files[0].filename;
        let episodeFileName = req.files[1].filename;
        await podcastUpload.create({ ...req.body, episodeImgPath: podcastImage, episodeVideoPath: episodeFileName })
        return res.json({ status: 200, message: "Podcast created!" })
    } catch (error) {
        next(error)
    }
}

// podcast watch view count =>
exports.podcastViewCount = async (req, res, next) => {
    let { podcastId, userId } = req.body;
    if (!podcastId) {
        return res.json({ status: 400, message: "Podcast id missing!" })
    }
    try {
        let podData = await podcastUpload.findOne({ _id: podcastId, userId: { $ne: userId } });
        if (!podData) {
            return res.json({ status: 404, message: "Not found!" })
        }
        podData.viewCount = podData.viewCount + 1;
        podData.save();
        return res.json({ status: 200, message: "Episode view count inscreased!" })
    } catch (error) {
        next(error)
    }
}