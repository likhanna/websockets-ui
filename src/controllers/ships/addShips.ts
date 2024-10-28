import { IShipsData } from "../../models/shipsModels.ts";
import { TConnections } from "../../models/connections.ts";
import { setTurn } from "../index.ts";
import { startGame } from "./startGame.ts";
import { createSchemaOfEnemyShips } from "../../helpers/createScemaOfEnemyShips.ts";

export const addShips = (roomConnections: TConnections) => {
  const shipsOfAllPlayersAdded = Object.values(roomConnections)
    .map((connection) => connection.ships)
    .every((ships: IShipsData[]) => ships.length > 0);

  Object.keys(roomConnections).forEach((playerId) => {
    const enemyData = Object.values(roomConnections).find(
      (connection) => connection.id !== playerId
    );
    if (enemyData) {
      roomConnections[playerId].schemaOfEnemyShips = createSchemaOfEnemyShips(
        enemyData.ships
      );
    }
  });

  if (shipsOfAllPlayersAdded) {
    startGame(roomConnections);
    setTurn(roomConnections, Object.keys(roomConnections)[0]);
  }
};
