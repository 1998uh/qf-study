# 环境
```
windows7/10
node.js v12+
npm
webpack+react+react-router+mobx+sass
```

# webpack

**1、安装**
```
全局安装：
cnpm install webpack -g
cnpm install webpack-cli -g
局部安装：
cnpm install webpack -D
cnpm install webpack-cli -D
```

**2、执行打包**

使用 CleanWebpackPlugin 插件自动清理 dist目录，见其官方文档。
```
webpack --config xxx.config.js
````


**3、启动本地服务**
```
cnpm install webpack-dev-server -D
cnpm install html-webpack-plugin -D

webpack-dev-server --config xxx.config.js
```

**4、启动热更新**
```
devServer.hot = true
在plugins中添加两个webpack内置的插件实例
```

**5、区分开发环境和生产环境**

cross-env 的使用

**6、babel-loader**

cnpm install babel-loader -D  // 用于加载.js文件
cnpm install @babel/core @babel/preset-env -D  // 这两个库才是真正用于编译js的


# 状态管理工具

## 1、React技术栈中的状态管理工具简介
flux - facebook官方提出的一种状态管理的解决方案（思想）
都是基于flux思想而诞生的开源的状态工具：
  mobx  mobx-react
  redux   react-redux

## 2、如何定义mobx状态管理数据？

cnpm install mobx -S

```
# store/index.js

import { observable } from 'mobx'
class Store {
  @observable msg = 'hello'
}
export default new Store()
```

## 3、如何使用mobx状态管理数据？

cnpm install mobx-react -S

```
# App.js

import { Provider } from 'mobx-react'
import store from '@/store'

return(
  <Provider store={store}>
  </Provider>
)
```

```
# Home.js

import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Home extends React.Component {}
export default Home
```

## 4、如何支持ES6的装饰器语法？

cnpm install @babel/plugin-proposal-class-properties -D
cnpm install @babel/plugin-proposal-decorators -D

```
# babel.config.json

{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
  ]
}
```


# 温馨提示

Vue 3.0 借鉴了React Hooks思想

useMounted
useDestroy
useComputed

React函数式组件 + Hooks模式 + TypeScript

ts-loader  @babel/preset-typescript
