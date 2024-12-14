import { connect } from "../apis/auth.js";



// upload podcast =>
export const createPodcast = async (podcastData) => {
    try {
        let response = await connect.post("/podcast/create", podcastData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error, "<-- error in create podcast!")
    }
}

// podcast lists =>
export const yourPodcastLists = async (userId, setPodcLists) => {
    console.log(userId)
    if (!userId) {
        return console.log("userId missing in yourPodcastLists!")
    }
    try {
        let response = await connect.post("/podcast/lists", { userId });
        return setPodcLists((prev) => ({ ...prev, podcastLists: response.data.podcastLists }));
    } catch (error) {
        console.log(error, "<-- error in your podcast lists!")
    }
}