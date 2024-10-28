import { EReqType, EResType } from "./reqAndResModels.ts";

export interface ICreateRoomReq {
  type: EReqType.CREATE_ROOM;
  data: "";
  id: 0;
}

export interface IRoomUser {
  name: string;
  user: number;
}
export interface IRoomData {
  roomId: string;
  roomUsers: IRoomUser[];
}

export interface IUpdateRoom {
  type: EResType.UPDATE_ROOM;
  data: string;
  id: 0;
}
