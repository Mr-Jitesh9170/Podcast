import axios from "axios";

let URL = 'http://localhost:8080'
export const connect = axios.create({
    baseURL: URL,
    withCredentials: true
});

export const auth = async (routes, data) => {
    let results = await connect.post(routes, data);
    return results.data;
}

export const logout = async () => {
    try {
        let results = await connect.post("/podcast/user/logout", {});
        return results.data;
    } catch (error) {
        console.log(error, "<--- Error in logout api!")
    }
}  