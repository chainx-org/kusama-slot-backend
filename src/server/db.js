"use strict";
const mongoose = require('mongoose');
const DB_URL = "mongodb://admin:password@a26cd83db9d0248dfa68340ca17fc4f6-1763314211.us-east-2.elb.amazonaws.com:27017/kusama-slot?authSource=admin";
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
mongoose.connection.on('connected', () => {
    console.log('数据库连接成功');
});
mongoose.connection.on('disconnected', () => {
    console.log('数据库连接断开');
});
mongoose.connection.on('error', (err) => {
    console.log('数据库连接异常', err);
});
module.exports = mongoose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sTUFBTSxHQUFXLHFJQUFxSSxDQUFDO0FBRzdKLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRzdILFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUN4QixDQUFDLENBQUMsQ0FBQTtBQUVGLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUN4QixDQUFDLENBQUMsQ0FBQTtBQUVGLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQVUsRUFBRSxFQUFFO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQzdCLENBQUMsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUEifQ==