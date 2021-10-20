import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:7000'});

API.interceptors.request.use((req) => {
    const json = localStorage.getItem('profile');
    if (json) {
        req!.headers!.token = JSON.parse(json).token;
    }
    return req;
});
