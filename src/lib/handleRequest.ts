import { WebSocket } from "ws";
import { loginAndCreatePlayer } from "../controllers/player/loginAndCreatePlayer.ts";
import { createRoom } from "../controllers/room/createRoom.ts";
import { ILoginResData } from "../models/loginModels.ts";
import { EReqType, ReqType } from "../models/reqAndResModels.ts";
import { IRoomData } from "../models/roomModels.ts";
import { addUserToRoom } from "../controllers/room/addUserToRoom.ts";
import { addShips } from "../controllers/ships/addShips.ts";
import { IAddShipsData } from "../models/shipsModels.ts";
import { attack } from "../controllers/game/attack.ts";

let loginRes: ILoginResData;
let room: IRoomData;
const clientsShipsData: IAddShipsData[] = [];
const connections: { [key: string]: WebSocket } = {};

export const handleRequest = (req: ReqType, socket: WebSocket) => {
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
      connections[loginRes.index] = socket;
      const roomData = addUserToRoom(req, room, loginRes, connections);
      if (roomData) {
        room = { ...roomData };
      }
      break;
    }
    case EReqType.ADD_SHIPS: {
      const shipsData: IAddShipsData = JSON.parse(req.data);
      clientsShipsData.push(shipsData);
      addShips(clientsShipsData, connections);
      break;
    }
    case EReqType.ATTACK:
      attack(req, clientsShipsData, connections);
      break;
    case EReqType.RANDOM_ATTACK:
      attack(req, clientsShipsData, connections);
      break;
  }
};
