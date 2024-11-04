import { WebSocket } from "ws";
import { ILoginResData } from "../models/loginModels.ts";
import { EReqType, ReqType } from "../models/reqAndResModels.ts";
import { IRoomData } from "../models/roomModels.ts";
import { IAddShipsData } from "../models/shipsModels.ts";
import { TConnections } from "../models/connections.ts";
import {
    addShips,
    attack,
    addUserToRoom,
    createRoom,
    loginAndCreatePlayer
} from "../controllers/index.ts";
import { getRoomConnections } from "../helpers/getRoomConnections.ts";

let loginRes: ILoginResData;
let rooms: IRoomData[] = [];
const connections: TConnections = {};

export const handleRequest = (req: ReqType, socket: WebSocket) => {
    switch (req.type) {
        case EReqType.REG: {
            loginRes = loginAndCreatePlayer(req, socket, rooms)
            if (loginRes) {
                connections[loginRes.index] = {
                    socket,
                    name: loginRes.name,
                    id: loginRes.index,
                    ships: [],
                    wins: 0,
                    schemaOfEnemyShips: [],
                    turn: false,
                    roomId: ""
                };
            }
            break;
        }
        case EReqType.CREATE_ROOM: {
            const roomData = createRoom(rooms);
            rooms.push(roomData);
            break;
        }
        case EReqType.ADD_USER_TO_ROOM: {
            const plaerToAddId = Object.keys(connections).find(key => connections[key].socket === socket);
            if (plaerToAddId) {
                const updatedRooms = addUserToRoom(req, connections, plaerToAddId, rooms);
                if (updatedRooms) {
                    rooms = [...updatedRooms];
                }
            }
            break;
        }      
        case EReqType.ADD_SHIPS: {
            const shipsData: IAddShipsData = JSON.parse(req.data);
            connections[shipsData.indexPlayer].ships = shipsData.ships;
            const roomId = connections[shipsData.indexPlayer].roomId;
            const roomConnections = getRoomConnections(connections, roomId);
            addShips(roomConnections);
            break;
        }
        case EReqType.ATTACK: {
            attack(req, connections);
            break;
        }
        case EReqType.RANDOM_ATTACK: {
            attack(req, connections);
            break;
        }
    }     
}