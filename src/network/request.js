import axios from 'axios'

export function request(config){
    //1.创建axios实例
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000,
    })

    //2.拦截器(请求成功、请求失败、响应成功、相应失败)
    axios.interceptors.request.use(
        config => {
            console.log('axios.interceptors.request.use')
            console.log(config)
            //拦截成功 要返回请求到的数据
            return config
        },
        err => {
            console.log(err)
        }
    )

    axios.interceptors.response.use(
        res => {
            console.log('axios.interceptors.response.use')
            console.log(res);
            return res.data
        },
        err => {
            console.log(err);
        }
    )
    

    //3. 返回一个promise 发送真正的网络请求
    return instance(config)
}

