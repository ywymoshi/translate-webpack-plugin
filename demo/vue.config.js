const { defineConfig } = require('@vue/cli-service')
const TranslateWebpackPlugin  = require('../translate-language/TranslateWebpackPlugin')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    plugins: [new TranslateWebpackPlugin({
      translateApiUrl: 'http://127.0.0.1:8999/api',
      from: 'zh-CN',
      to: 'zh-TW',
      separator: 'A',
      regx: /[\u4e00-\u9fa5]/g
    })]
  }
})
