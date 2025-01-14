import { connect } from "./auth";

// user profile =>
export const userProfileView = async (userId, setProfile) => {
    try {
        let response = await connect.post("/podcast/user-profile", { userId });
        return setProfile((prev) => ({ ...prev, profileData: response.data?.userProfile }))
    } catch (error) {
        console.log(error, "<-- error in user profile view!")
    }
}

export const profileUpload = async (formdata) => {
    try {
        let response = await connect.post("/podcast/profile-update", formdata);
        return response.data;
    } catch (error) {
        console.log(error, "<-- error in profileUpload!")
    }
} 