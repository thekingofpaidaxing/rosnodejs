// 导入 express
var express = require('express');
// 创建 express实例，也就是创建 express服务器
var app = express();

app.use('/gs-robot', require('./gs-robot/real_time_data'))

// 启动服务器
app.listen(8080, function () {
  console.log('服务器已启动')
})

