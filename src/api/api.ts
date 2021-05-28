import { ApplyInfo, UserInfo } from './types';

const Koa = require("koa");
const KoaRouter = require("koa-router");
const Controller = require("../server");
const app = new Koa();
const cors = require('@koa/cors')
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());
app.use(cors())

const router = new KoaRouter();

router.get(`/userList`, async (ctx: any) => {
  ctx.body = await Controller.getUserList();
});

router.post(`/apply`, async (ctx: any) => {
  const requestInfo: ApplyInfo = ctx.request.body;
  // console.log('requestInfo', requestInfo)
  try{
    const userInfo: UserInfo[] = await Controller.findInfoByAddress(requestInfo.address)

    if(userInfo.length <= 0){
      await Controller.apply({address: requestInfo.address, inviteCode: requestInfo.inviteCode})
      await Controller.updateUserWhoInviteMe(requestInfo.inviteCode, requestInfo.address)
      const userInfo: UserInfo[] = await Controller.findInfoByAddress(requestInfo.address)

      ctx.body = {
        status: '加入成功',
        address: userInfo[0].address,
        ownInviteCode: userInfo[0].ownInviteCode,
        IInvited: userInfo[0].IInvited
      }

    }else{
      ctx.body = {
        status: '该账户已存在',
        address: userInfo[0].address,
        ownInviteCode: userInfo[0].ownInviteCode,
        IInvited: userInfo[0].IInvited
      }
    }
  }catch (err){
    console.log('err', err)
  }
});


app.use(router.allowedMethods()).use(router.routes());

app.listen('8080', () => {
  console.log('服务器启动成功');
  console.log('服务器地址： http://localhost:8080');
})
