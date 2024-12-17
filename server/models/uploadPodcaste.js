const { Schema, model } = require("mongoose")

const uploadPodcastSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: "userId missing",
        },
        episodeImgPath: {
            type: String,
            required: true
        },
        podcastName: {
            type: String,
            required: true
        },
        podcastDescription: {
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
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)
 
module.exports = model("Podcast", uploadPodcastSchema)