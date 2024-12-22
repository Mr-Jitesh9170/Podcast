import { connect } from "../apis/auth.js";


// category lists podcast =>
export const categoryLists = async (podcastCategory) => {
    try {
        let response = await connect.post("/podcast/category-podcast-lists", { podcastCategory });
        return response.data?.podcastCategoryLists
    } catch (error) {
        console.log(error, "<-- error in create podcast!")
    }
}

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

// favourite podcast lists =>
export const favouritePodLists = async (userId, setFavouritesLists) => {
    if (!userId) {
        return console.log("userId missing in favouritePodLists!")
    }
    try {
        let response = await connect.post("/podcast/favourite-podcast-lists", { userId });
        return setFavouritesLists(response.data.favritePodLists);
    } catch (error) {
        console.log(error, "<-- error in favouritePodLists lists!")
    }
}

// add/remove favrourite podcasts =>
export const addOrRemoveFavouritePod = async (favourite) => {
    try {
        await connect.post("/podcast/add-or-remove-favourite-podcasts", favourite);
    } catch (error) {
        console.log(error, "<-- error in addOrRemoveFavouritePod!")
    }
}