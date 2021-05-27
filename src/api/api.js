"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const KoaRouter = require("koa-router");
const Controller = require("../server");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());
const router = new KoaRouter();
router.get(`/userList`, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = yield Controller.getUserList();
}));
router.post(`/apply`, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const requestInfo = ctx.request.body;
    try {
        const userInfo = yield Controller.findInfoByAddress(requestInfo.address);
        if (userInfo.length <= 0) {
            yield Controller.apply({ address: requestInfo.address, inviteCode: requestInfo.inviteCode });
            yield Controller.updateUserWhoInviteMe(requestInfo.inviteCode, requestInfo.address);
            const userInfo = yield Controller.findInfoByAddress(requestInfo.address);
            ctx.body = {
                status: '加入成功',
                address: userInfo[0].address,
                ownInviteCode: userInfo[0].ownInviteCode,
                IInvited: userInfo[0].IInvited
            };
        }
        else {
            ctx.body = {
                status: '该账户已存在',
                address: userInfo[0].address,
                ownInviteCode: userInfo[0].ownInviteCode,
                IInvited: userInfo[0].IInvited
            };
        }
    }
    catch (err) {
        console.log('err', err);
    }
}));
app.use(router.allowedMethods()).use(router.routes());
app.listen('8080', () => {
    console.log('服务器启动成功');
    console.log('服务器地址： http://localhost:8080');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNCLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN4QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUN0QixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUU3QyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFFdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUUvQixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFPLEdBQVEsRUFBRSxFQUFFO0lBQ3pDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQU8sR0FBUSxFQUFFLEVBQUU7SUFDdkMsTUFBTSxXQUFXLEdBQWMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFFaEQsSUFBRztRQUNELE1BQU0sUUFBUSxHQUFlLE1BQU0sVUFBVSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUVwRixJQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQ3RCLE1BQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQTtZQUMxRixNQUFNLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNuRixNQUFNLFFBQVEsR0FBZSxNQUFNLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7WUFFcEYsR0FBRyxDQUFDLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQzVCLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYTtnQkFDeEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQy9CLENBQUE7U0FFRjthQUFJO1lBQ0gsR0FBRyxDQUFDLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO2dCQUM1QixhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7Z0JBQ3hDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTthQUMvQixDQUFBO1NBQ0Y7S0FDRjtJQUFBLE9BQU8sR0FBRyxFQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDeEI7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFFdEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFBIn0=