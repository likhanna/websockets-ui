# RSSchool NodeJS websocket task template

> Static http server and base task packages.
> By default WebSocket client tries to connect to the 3000 port.

## Installation

1. Clone/download repo
2. `npm install`

## Usage

`npm run start:dev`

- App served @ `http://localhost:8181`

---

**All commands**

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run start:dev` | App served @ `http://localhost:8181` |
| `npm run start`     | App served @ `http://localhost:8181` |

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.

### Game description

We should have inmemory DB with player data (login and password) storage
Player can create game room or connect to the game room after login
Player room data (players, game board, ships positions) storages in the server
Game starts after 2 players are connected to the room and sent ships positions to the server
Server sends move order
Players should shoot in their's turn
Server send back shot result
If player hits or kills the ship, player should make one more shoot
Player wins if he have killed all enemies ships
