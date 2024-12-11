import { connect } from "../apis/auth.js";

export const createPodcast = async (routes, podcastData) => {
    if (!routes || !podcastData) {
        return console.log("Arguments missing in CreatePodcast!")
    }
    for (let [key, value] of podcastData.entries()) {
        console.log(`${key}:`, value);
    }
    try {
        let response = await connect.post(routes, podcastData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error, "<-- error in create podcast!")
    }
}