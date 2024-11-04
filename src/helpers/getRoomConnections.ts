import { TConnections } from "../models/connections.ts";

export const getRoomConnections = (
  connections: TConnections,
  indexRoom: string
) => {
  const roomConnections: TConnections = Object.keys(connections).reduce(
    (acc: TConnections, key) => {
      if (connections[key].roomId === indexRoom) {
        acc[key] = connections[key];
      }
      return acc;
    },
    {}
  );
  return roomConnections;
};
