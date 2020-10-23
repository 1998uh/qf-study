// 以下配置，是给 npm run serve / npm run build 来使用

// CommonJS模块，这是Node.js代码
module.exports = {
  // 本地服务器
  devServer: {
    port: 9090,
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
