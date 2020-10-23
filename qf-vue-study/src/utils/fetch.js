import axios from 'axios'

// const baseURL = 'https://cnodejs.org/api/v1'
// const baseURL = 'https://c.y.qq.com'
const baseURL = 'http://localhost:9090'  // 本地服务器

// 创建axios实例
const fetch = axios.create({
  baseURL,  // API服务器地址
  timeout: 7000,  // 设置超时时间
  headers: {'X-Custom-Header': 'foobar'}  // 请求头
})

// 封装请求拦截器
fetch.interceptors.request.use(function (config) {
  // 在请求发送之前，在这里可以做一些事儿
  // 一般会这里，加上token的请求头信息
  config.headers.token = '2006'
  console.log('请求之前', config)
  return config
}, function (error) {
  return Promise.reject(error);
})

// 封装响应拦截器
fetch.interceptors.response.use(function (response) {
  // 当响应数据回来时，可以对响应数据做一些过滤
  console.log('响应数据', response)
  let res = null
  if(response.status==200){
    if(response.data.code===0) {
      // 成功
      res = response.data.data
    } else {
      console.log('网络错误，请稍后再试')
    }
  }
  return res
}, function (error) {
  return Promise.reject(error);
})

export default fetch
