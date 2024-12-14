import { connect } from "../apis/auth.js";


// user profile =>
export const userProfileView = async (userId, setProfile) => {
    try {
        let response = await connect.post("/podcast/user-profile", { userId });
        return setProfile((prev) => ({ ...prev, profileData: response.data.userProfile }))
    } catch (error) {
        console.log(error, "<-- error in user profile view!")
    }
}