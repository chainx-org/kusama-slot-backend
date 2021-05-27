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
const User = require('./modal');
module.exports = {
    getUserList() {
        return __awaiter(this, void 0, void 0, function* () {
            return User.find((err, result) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    },
    findWhoInviteMe(inviteCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return User.find({ ownInviteCode: inviteCode }, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log('res', result);
            });
        });
    },
    updateUserWhoInviteMe(inviteCode, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const updater = { $addToSet: { IInvited: address } };
            return User.findOneAndUpdate({ ownInviteCode: inviteCode }, updater, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log('res', result);
            });
        });
    },
    apply({ address, inviteCode }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userList = yield this.getUserList();
            const { length } = userList;
            if (!inviteCode) {
                inviteCode = '';
            }
            const ownInviteCode = 'w' + (1111 + length);
            const WhoInviteMe = yield this.findWhoInviteMe(inviteCode);
            let addressWhoInviteMe;
            if (WhoInviteMe.length > 0) {
                addressWhoInviteMe = WhoInviteMe[0].address;
            }
            else {
                addressWhoInviteMe = '';
            }
            const newUser = new User({
                id: length + 1,
                address,
                inviteCode,
                ownInviteCode,
                inviteMe: addressWhoInviteMe,
                IInvited: []
            });
            return newUser.save((err, res) => {
                if (err) {
                    console.log('err', err);
                }
                return res;
            });
        });
    },
    findInfoByAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return User.find({ address }, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log('res', result);
            });
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUUvQixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ1QsV0FBVzs7WUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFVLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO2dCQUNoRCxJQUFJLEdBQUcsRUFBRTtvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUNqQjtZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBO0lBQ0ssZUFBZSxDQUFDLFVBQWtCOztZQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxhQUFhLEVBQUUsVUFBVSxFQUFDLEVBQUUsQ0FBQyxHQUFVLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO2dCQUM3RSxJQUFJLEdBQUcsRUFBRTtvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUNqQjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUM1QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUNLLHFCQUFxQixDQUFDLFVBQWtCLEVBQUUsT0FBZTs7WUFDN0QsTUFBTSxPQUFPLEdBQUcsRUFBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUMsQ0FBQTtZQUNsRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFVLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO2dCQUNsRyxJQUFJLEdBQUcsRUFBRTtvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUNqQjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUM1QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUNLLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQVk7O1lBQzFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ3pDLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxRQUFRLENBQUE7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixVQUFVLEdBQUcsRUFBRSxDQUFBO2FBQ2hCO1lBQ0QsTUFBTSxhQUFhLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFBO1lBQzNDLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMxRCxJQUFJLGtCQUFrQixDQUFBO1lBQ3RCLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7YUFDNUM7aUJBQU07Z0JBQ0wsa0JBQWtCLEdBQUcsRUFBRSxDQUFBO2FBQ3hCO1lBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQ3ZCLEVBQUUsRUFBRSxNQUFNLEdBQUcsQ0FBQztnQkFDZCxPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsRUFBRTthQUNiLENBQUMsQ0FBQTtZQUNGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVUsRUFBRSxHQUFhLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7aUJBQ3hCO2dCQUNELE9BQU8sR0FBRyxDQUFBO1lBQ1osQ0FBQyxDQUFDLENBQUE7UUFFSixDQUFDO0tBQUE7SUFDSyxpQkFBaUIsQ0FBQyxPQUFlOztZQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLEdBQVUsRUFBRSxNQUFnQixFQUFFLEVBQUU7Z0JBQzNELElBQUksR0FBRyxFQUFFO29CQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ2pCO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQzVCLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBO0NBRUYsQ0FBQSJ9