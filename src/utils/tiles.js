export const tileArr = [];
export const tileSize = 20;

export const createGenesisTile = (mw = 300, mh = 300) => {
  return {
    x: Math.floor(Math.random()*(mw - tileSize + 1)),
    y: Math.floor(Math.random()*(mh - tileSize + 1))
  }
}

export const chooseRandomTile = (arr = tileArr) => {
  return arr[Math.floor(Math.random()*arr.length)];
}

export const tileExists = (tile) => {
  return tileArr.some(t => (
    t.x === tile.x && t.y === tile.y
  ))
}

export const checkOpenNeighbors = (tile) => {
  const dirOffsets = {
    'n': {x: 0, y: -1},
    'e': {x: 1, y: 0},
    's': {x: 0, y: 1},
    'w': {x: -1, y: 0}
  }

  let openNeighbors = [];
  
  for (const offsets of Object.values(dirOffsets)) {
    let neighborTile = {
      x: tile.x + offsets.x * tileSize,
      y: tile.y + offsets.y * tileSize
    }
    if (!tileExists(neighborTile))
      openNeighbors = [...openNeighbors, neighborTile]
  }

  return openNeighbors;
}