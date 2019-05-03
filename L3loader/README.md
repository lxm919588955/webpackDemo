url-loader
1.loader：文件大小 小于指定大小 转DataURL(base64)，精灵图的完美替代，因为小图片都在1个压缩的js文件中。
2.module对象下的rules就是指对文件的扩展名进行正则过滤，会使用到url-loader;limit:8192指文件小于8k进行base64转换
3.impotr img1 from '图片路径'
4.package.json中有的需要安装file-loader

