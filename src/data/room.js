const tileSize = 20;
const dirOffsets = {
  'n': {x: 0, y: -1},
  'e': {x: 1, y: 0},
  's': {x: 0, y: 1},
  'w': {x: -1, y: 0}
}

export default function createRoom(numTiles) {
  let room = [];
  // create a genesis tile
  room.push(createTile());

  // create as many tiles as needed
  for (let i = 1; i < numTiles; i++) {
    const currentTile = room[i-1];
    let neighbors = checkOpenNeighbors(currentTile, room);
    while (!neighbors.length)
      neighbors = checkOpenNeighbors(chooseRandomTile());

    room.push(chooseRandomTile(neighbors));
  }

  // return the created room
  return room;
}

const createTile = (mw = 300, mh = 300) => {
  return {
    x: Math.floor(Math.random()*(mw - tileSize + 1)),
    y: Math.floor(Math.random()*(mh - tileSize + 1))
  }
}

const chooseRandomTile = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)];
}

const tileExists = (tile, arr) => {
  return arr.some(t => (
    t.x === tile.x && t.y === tile.y
  ))
}

const checkOpenNeighbors = (tile, arr) => {
  let openNeighbors = [];
  
  for (const offset of Object.values(dirOffsets)) {
    let neighborTile = {
      x: tile.x + offset.x * tileSize,
      y: tile.y + offset.y * tileSize
    }
    if (!tileExists(neighborTile, arr))
      openNeighbors = [...openNeighbors, neighborTile]
  }

  return openNeighbors;
}