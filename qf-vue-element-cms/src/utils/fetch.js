import axios from 'axios'

const baseURL = 'http://localhost:8002'
const version = '/api/v1'

const instance = axios.create({
  baseURL: baseURL+version,
  timeout: 7000,
  headers: {}
})

instance.interceptors.request.use(function (config) {
  // 加token鉴权（识别你是谁）
  config.headers.Authorization = localStorage.getItem('token')
  return config;
}, function (error) {
  return Promise.reject(error);
})

instance.interceptors.response.use(function (response) {
  let res = null
  // 对后端数据进行过滤
  if (response.status === 200) {
    if (response.data && response.data.err === 0) {
      res = response.data.data
    }
  }
  return res
}, function (error) {
  return Promise.reject(error);
})

export default instance
