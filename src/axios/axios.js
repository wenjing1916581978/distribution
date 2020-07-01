import axios from 'axios'
import wepyAxiosAdapter from 'wepy-plugin-axios/dist/adapter'

const adapter = wepyAxiosAdapter(axios)

const instance = axios.create({
    adapter: adapter,
    timeout: 3000,
    // headers: { 'X-Custom-Header': 'foobar' }
});
// const instance = axios

//请求拦截处理
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//返回拦截处理
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

const request = async (api, params,type) => {
    return new Promise((resolve, reject) => {
      let json
      if(!type){
        json = instance.post(api,params)
      }else{
        json = instance.get(api)
      }
      json.then(res => {
        resolve(res.data)
      }).catch(error => {

        reject(error)
      })
    })
}
export default request
