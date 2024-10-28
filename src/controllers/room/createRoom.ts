import { generateIdx } from "../../helpers/generateIdx.ts";
import { IRoomData } from "../../models/roomModels.ts";
import { updateRoom } from "./updateRoom.ts";

export const createRoom = () => {
  const roomId = generateIdx();
  const newRoomData: IRoomData = {
    roomId,
    roomUsers: [],
  };
  updateRoom([newRoomData]);
  return newRoomData;
};
