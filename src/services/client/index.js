import axios from "axios";
import config from "../../../config";
import {includes,get} from "lodash";
import storage from "../storage";
import Swal from "sweetalert2";
const client = axios.create({
    baseURL: config.API_ROOT,
    headers: {
        common: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8"
        }
    }
});
client.interceptors.request.use((config) => {
    if (!includes(window.location.href, 'auth')) {
    }
    const token = get(JSON.parse(storage.get('settings')), 'state.token', null);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    const clientInfo = get(JSON.parse(storage.get('settings')), 'state.clientInfo', null);
    if (clientInfo) {
        config.headers['clientInfo'] = clientInfo;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});


client.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error?.response?.data?.status == 401) {
            window.localStorage.clear();
    }
    return Promise.reject(error);
});


export {client};


