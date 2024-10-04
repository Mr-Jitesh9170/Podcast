import axios from "axios";

let URL = 'http://localhost:8080'
const connect = axios.create({
    baseURL: URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
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