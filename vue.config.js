const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        targe: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^api': ''
        },
        changeOrigin: true
      }
    }
  }
})
