import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => {
    return axios.get(URL);
};