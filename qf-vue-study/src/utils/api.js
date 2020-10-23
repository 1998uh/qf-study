import fetch from './fetch'

export function fetchCnodeList(params) {
  // 返回一个promise对象
  return fetch({
    url: '/topics',
    method: 'GET',
    params
  })
}

// import { fetchMusic } from ''
export function fetchMusic(params) {
  return fetch({
    url: '/soso/fcgi-bin/client_search_cp',
    method: 'GET',
    params
  })
}

// 抛出一个名字叫做default的对象模块
export default {
  fetchCnodeList,
  fetchMusic
}



// 【模块化语法】
// 在脚手架环境，一切文件都是模块
// 使用 export default 抛出的模块，要使用 import xxx from './xxx' 导入
// 使用 export {x,y} 抛出的模块，要使用 import { x } from './yyy'  按需导入
// 值得注意是，在同一个模块(文件)，有且最多只能有一个 export default
