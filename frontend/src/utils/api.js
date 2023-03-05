import * as axios from "axios";


const getCookie = (cookie) => {
    return localStorage.getItem(cookie);
}

const setCookie = (cookie) => {
     return localStorage.setItem(cookie);
}


class Api {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.api_url = "";
    }

    init = () => {
        this.api_token = getCookie("ACCESS_TOKEN");

        let headers = {
            Accept: "application/json",
        };

        if (this.api_token) {
            headers.Authorization = `Bearer ${this.api_token}`;
        }

        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 31000,
            headers: headers,
        });

        return this.client;
    };

    getFriendList = (params) => {
        return this.init().get('/friendList', { params: params });
    }

    addNewUser = (data) => {
        return this.init().post('/register', data);
    }

    loginUser = (data) => {
        return this.init().post('/login', data);
    }
}