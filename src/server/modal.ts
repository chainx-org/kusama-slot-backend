// @ts-ignore
const mongoose= require('./db')
const Schema = mongoose.Schema;

const schema = new Schema({
  id: {type: Number},
  address: {type: String},
  ownInviteCode: {type: String},
  inviteCode: {type: String},
  inviteMe: {type: String},
  IInvited: {type: Array}
})

const User = mongoose.model('User', schema, 'userlist')

module.exports = User
