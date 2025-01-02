import axios from "axios";

let URL = 'https://podcast-t43s.onrender.com'
export const connect = axios.create({
    baseURL: URL,
    withCredentials: true
});

// connect.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             alert('Your session has expired. Please log in again.');
//             localStorage.removeItem('userId');
//         }
//         return Promise.reject(error);
//     }
// );

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