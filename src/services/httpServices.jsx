import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

export function getAllProducts() {
    return axios.get("product/")
}