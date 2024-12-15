const { Schema, model } = require("mongoose")

const favouritesPodcasts = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: "userId missing!",
        },
        podcastId: {
            type: Schema.Types.ObjectId,
            ref: "Podcast",
            required: "podcastId missing!",
        }, 
    }
)

module.exports = model("Favourites-Podcast", favouritesPodcasts)