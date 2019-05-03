const path = require('path')

/* module.exports = {
  entry: './input.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'output.bundle.js'
  }
}*/
module.exports = {
  entry: {
    input: './input.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    // name 指的是home about other
    filename: '[name].bundle.js'
  },
  // 指定 development production 结果dist文件夹下的代码是生产还是开发 打包时开发保留了console等开发代码
  mode: 'development',
  // module对象下的rules就是指对文件的扩展名进行正则过滤，会使用到url-loader;limit:8192指文件小于8k进行base64转换
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
