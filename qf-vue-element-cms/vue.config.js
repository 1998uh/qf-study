
module.exports = {
  // 本地服务的配置
  devServer: {
    port: 8002,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
