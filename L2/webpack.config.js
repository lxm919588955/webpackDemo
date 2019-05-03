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
    home: './home.js',
    about: './about.js',
    other: './other.js',
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    // name 指的是home about other
    filename: '[name].bundle.js'
  },
  // 指定 development production 结果dist文件夹下的代码是生产还是开发 打包时开发保留了console等开发代码
  mode: 'production'
}
