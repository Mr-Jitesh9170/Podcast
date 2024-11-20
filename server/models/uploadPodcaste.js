const { Schema, model } = require("mongoose")

const uploadPodcastSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        episodeImgPath: {
            type: String,
            required: true
        },
        podcastName: {
            type: String,
            required: true
        },
        podcastDescriptions: {
            type: String,
            required: true
        },
        isMedia: {
            type: String,
            required: true,
            enum: ["Audio", "Video"]
        },
        podcastCategory: {
            type: String,
            required: true,
            enum: ["Culture", "Business", "Education", "Health", "Comedy", "News", "Science", "History", "Religion", "Development", "Sports", "Crime"]
        },
        episodeName: {
            type: String,
            required: true,
        },
        episodeVideoPath: { type: String, required: true, },
        episodeDescription: {
            type: String,
            required: true,
        },
        viewCount: {
            type: Number,
            required: true,
            default: 0,
        },
    }
)

module.exports = model("Podcast", uploadPodcastSchema)