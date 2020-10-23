import axios from './fetch'

export function fetchRegist(data) {
  return axios({
    url: '/user/regist',
    method: 'POST',
    data
  })
}

export function fetchLogin(data) {
  return axios({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export function fetchAllCates(params) {
  return axios({
    url: '/jd/cates',
    method: 'GET',
    params
  })
}


export function fetchGoodUpdate(data) {
  return axios({
    url: '/jd/good/update',
    method: 'POST',
    data
  })
}

export function fetchGoodList(params) {
  return axios({
    url: '/jd/good/list',
    method: 'GET',
    params
  })
}

// 添加广告
export function fetchAdAdd(data) {
  return axios({
    url: '/ad/add',
    method: 'POST',
    data
  })
}
export function fetchAdList(params) {
  return axios({
    url: '/ad/list',
    method: 'GET',
    params
  })
}

export default {
  fetchRegist,
  fetchLogin,
  fetchAllCates,
  fetchGoodUpdate,
  fetchGoodList,
  fetchAdAdd,
  fetchAdList
}
