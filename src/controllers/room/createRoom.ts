import { generateIdx } from "../../helpers/index.ts";
import { IRoomData } from "../../models/roomModels.ts";
import { updateRoom } from "./updateRoom.ts";

export const createRoom = (rooms: IRoomData[]) => {
  const roomId = generateIdx();
  const newRoomData: IRoomData = {
    roomId,
    roomUsers: [],
  };
  updateRoom([...rooms, newRoomData]);
  return newRoomData;
};
