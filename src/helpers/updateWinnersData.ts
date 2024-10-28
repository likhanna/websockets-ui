import { updateWinners } from "../controllers/index.ts";
import { TConnections } from "../models/connections.ts";
import { IWinnerData } from "../models/winnerModels.ts";

export const updateWinnersData = (
  winnerId: string,
  connections: TConnections
) => {
  connections[winnerId].wins = connections[winnerId].wins + 1;
  const winnersData: IWinnerData[] = Object.values(connections).map(
    (connection) => {
      return {
        name: connection.name,
        wins: connection.wins,
      };
    }
  );
  updateWinners(winnersData);
  for (const key in connections) {
    connections[key].ships = [];
  }
};
