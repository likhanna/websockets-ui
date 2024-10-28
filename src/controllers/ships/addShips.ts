import { IAddShipsData } from "../../models/shipsModels.ts";
import { startGame } from "./startGame.ts";
import { setTurn } from "../game/setTurn.ts";
import { TConnections } from "../../models/roomModels.ts";

export const addShips = (
  clientsShipsData: IAddShipsData[],
  connections: TConnections
) => {
  if (clientsShipsData.length === 2) {
    startGame(connections, clientsShipsData);
    const clientsIndexes = clientsShipsData.map((data) => data.indexPlayer);
    setTurn(connections, clientsIndexes[0]);
  }
};
