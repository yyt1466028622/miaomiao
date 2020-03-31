import axios from 'axios'

// axios({
//     url: 'api/data/heros_detailsWIthURL.json',
//     methods: "post",
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
// }).then(res => {
//     console.log(res)
// })

export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        // console.log(err);
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}

export function request1(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: "/loc",
        timeout: 5000,
    })

    // 3.发送真正的网络请求
    return instance(config)
}

export function request2(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: "/api",
        timeout: 5000,
    })

    // 3.发送真正的网络请求
    return instance(config)
}