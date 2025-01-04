import axios from "axios";

let URL = 'https://podcast-t43s.onrender.com'

export let mediaURL = `${URL}/media`;

export const connect = axios.create({
    baseURL: URL,
    withCredentials: true,
});

export const auth = async (routes, data) => {
    try {
        let results = await connect.post(routes, data);
        return results.data;
    } catch (error) {
        console.log(error, "<--- error in auth apis!")
    }
}

export const logout = async () => {
    try {
        let results = await connect.post("/podcast/user/logout", {});
        return results.data;
    } catch (error) {
        console.log(error, "<--- Error in logout api!")
    }
}  