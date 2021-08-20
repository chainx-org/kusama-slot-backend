
// @ts-ignore
const mongoose = require('mongoose');
const DB_URL: string = process.env.KUSAMASLOT_URL!;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

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
