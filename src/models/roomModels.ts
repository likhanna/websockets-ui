import { EReqType, EResType } from "./reqAndResModels.ts";

export interface ICreateRoomReq {
  type: EReqType.CREATE_ROOM;
  data: string;
  id: 0;
}

export interface IRoomUser {
  name: string;
  index: string;
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

export interface IDataToAddUser {
  indexRoom: string;
}
export interface IAddUserToRoomReq {
  type: EReqType.ADD_USER_TO_ROOM;
  data: string;
  id: 0;
}

export interface ICreatedGameData {
  idGame: string;
  idPlayer: string;
}

export interface ICreateGame {
  type: EResType.CREATE_GAME;
  data: string;
  id: 0;
}
