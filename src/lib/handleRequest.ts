import { WebSocket } from "ws";
import { loginAndCreatePlayer } from "../controllers/player/loginAndCreatePlayer.ts";
import { createRoom } from "../controllers/room/createRoom.ts";
import { ILoginReq, ILoginResData } from "../models/loginModels.ts";
import { EReqType } from "../models/reqAndResModels.ts";
import {
  IAddUserToRoomReq,
  ICreateRoomReq,
  IRoomData,
} from "../models/roomModels.ts";
import { addUserToRoom } from "../controllers/room/addUserToRoom.ts";
import { addShips } from "../controllers/ships/addShips.ts";
import { IAddShipsReq } from "../models/shipsModels.ts";

type ReqTypes = ILoginReq | ICreateRoomReq | IAddUserToRoomReq | IAddShipsReq;

let loginRes: ILoginResData;
let room: IRoomData;

export const handleRequest = (req: ReqTypes, socket: WebSocket) => {
  switch (req.type) {
    case EReqType.REG:
      room
        ? (loginRes = loginAndCreatePlayer(req, socket, room))
        : (loginRes = loginAndCreatePlayer(req, socket));
      break;
    case EReqType.CREATE_ROOM: {
      const roomData = createRoom();
      room = { ...roomData };
      break;
    }
    case EReqType.ADD_USER_TO_ROOM: {
      const roomData = addUserToRoom(req, room, loginRes);
      if (roomData) {
        room = { ...roomData };
      }
      break;
    }
    case EReqType.ADD_SHIPS:
      addShips(req);
      break;
  }
};
