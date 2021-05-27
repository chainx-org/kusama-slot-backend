export interface ApplyInfo {
  address: string;
  inviteCode: string;
}

export interface UserInfo {
  id: number;
  address: string;
  ownInviteCode: string;
  inviteCode: string;
  inviteMe: string;
  IInvited: string[]
}
