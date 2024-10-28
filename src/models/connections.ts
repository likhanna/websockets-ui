import { WebSocket } from "ws";
import { IShipsData, TSchemaOfEnemyShips } from "./shipsModels.ts";

export type TConnections = {
  [key: string]: {
    socket: WebSocket;
    name: string;
    id: string;
    ships: IShipsData[];
    wins: number;
    schemaOfEnemyShips: TSchemaOfEnemyShips;
    turn: boolean;
    roomId: "";
  };
};
