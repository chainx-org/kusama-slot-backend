const dotenv = require('dotenv')
dotenv.config()
const CLIENT = JSON.parse(process.env.CLIENT!)

// @ts-ignore
const mongoose = require('mongoose');
const DB_URL: string = `mongodb://${CLIENT.user}:${CLIENT.pass}@a26cd83db9d0248dfa68340ca17fc4f6-1763314211.us-east-2.elb.amazonaws.com:27017/kusama-slot?authSource=admin`;
// mongoose.connect(DB_URL);
// 根据警告的提示信息进行配置
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
// mongoose.auth('admin', 'XqQB3QR.j9TtEYLpZsUhF.-_')

mongoose.connection.on('connected', () => {
  console.log('数据库连接成功')
})

mongoose.connection.on('disconnected', () => {
  console.log('数据库连接断开')
})

mongoose.connection.on('error', (err: Error) => {
  console.log('数据库连接异常', err)
})

module.exports = mongoose
