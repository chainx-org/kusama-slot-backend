import { ApplyInfo } from '../api/types';
import { Document } from "mongoose";

const User = require('./modal')

module.exports = {
  async getUserList() {
    return User.find((err: Error, result: Document) => {
      if (err) {
        console.log(err)
      }
    })
  },
  async findWhoInviteMe(inviteCode: string) {
    return User.find({ownInviteCode: inviteCode}, (err: Error, result: Document) => {
      if (err) {
        console.log(err)
      }
      console.log('res', result)
    })
  },
  async updateUserWhoInviteMe(inviteCode: string, address: string) {
    const updater = {$addToSet: { IInvited: address }}
    return User.findOneAndUpdate({ownInviteCode: inviteCode}, updater, (err: Error, result: Document) => {
      if (err) {
        console.log(err)
      }
      console.log('res', result)
    })
  },
  async apply({address, inviteCode}: ApplyInfo) {
    const userList = await this.getUserList()
    const {length} = userList
    if (!inviteCode) {
      inviteCode = ''
    }
    const ownInviteCode = 'w' + (1111 + length)
    const WhoInviteMe = await this.findWhoInviteMe(inviteCode)
    let addressWhoInviteMe
    if (WhoInviteMe.length > 0) {
      addressWhoInviteMe = WhoInviteMe[0].address
    } else {
      addressWhoInviteMe = ''
    }
    const newUser = new User({
      id: length + 1,
      address,
      inviteCode,
      ownInviteCode,
      inviteMe: addressWhoInviteMe,
      IInvited: []
    })
    return newUser.save((err: Error, res: Document) => {
      if (err) {
        console.log('err', err)
      }
      return res
    })

  },
  async findInfoByAddress(address: string){
    return User.find({address}, (err: Error, result: Document) => {
      if (err) {
        console.log(err)
      }
      console.log('res', result)
    })
  }

}

