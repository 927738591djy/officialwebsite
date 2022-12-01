import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = axios

const request = axios.create({
    baseURL: "http://192.168.2.16:80",
    timeout: 5000,
})


request.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
    const res = response.data
    if (res.status !== 200) {
        // 请求失败
        return res
    }
    else {
        return res
    }
}, function (error) {
    return Promise.reject(error);
});

export default request