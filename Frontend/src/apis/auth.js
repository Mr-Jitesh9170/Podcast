import axios from "axios";

let URL = 'http://localhost:8080'
export const connect = axios.create({
    baseURL: URL,
    timeout: 5000
});

// auth =>
export const auth = async (routes, data) => {
    try {
        let results = await connect.post(routes, data);
        return results.data;
    } catch (error) {
        console.log(error, "<--- Error in auth api!")
    }
}