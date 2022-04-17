const dirOffsets = {
  'n': {x: 0, y: -1},
  'e': {x: 1, y: 0},
  's': {x: 0, y: 1},
  'w': {x: -1, y: 0}
}

export default function createTileMap(rows, cols) {
  // create a new 0-filled array
  let tileMap = Array.from({length: rows}, _ => new Array(cols).fill(0));

  // create a genesis tile
  let genR = Math.floor(Math.random() * rows);
  let genC = Math.floor(Math.random() * cols);
  tileMap[genR][genC] = 1;

  // create as many tiles as needed
  let maxTiles = Math.floor((rows * cols) * .6);
  let curR = genR;
  let curC = genC;
  for (let i = 1; i < maxTiles; i++) {  
    let neighbors = checkOpenNeighbors(curR, curC, tileMap);
    while (!neighbors.length) {
      let [ r, c ] = chooseRandomTile(tileMap)
      neighbors = checkOpenNeighbors(r, c, tileMap);
    }

    [ curR, curC ] = neighbors[Math.floor(Math.random() * neighbors.length)];
    tileMap[curR][curC] = 1;
  }

  // return the created room
  return tileMap;
}

const chooseRandomTile = (arr) => {
  let ranR = Math.floor(Math.random() * arr.length);
  let ranC = Math.floor(Math.random() * arr[0].length);
  while (!arr[ranR][ranC]) {
    ranR = Math.floor(Math.random() * arr.length);
    ranC = Math.floor(Math.random() * arr[0].length);
  }

  return [ranR, ranC];
}

const checkOpenNeighbors = (r, c, arr) => {
  let openNeighbors = [];
  
  for (const offset of Object.values(dirOffsets)) {
    let nr = r + offset.y;
    let nc = c + offset.x;
    if (
      nr >= 0 && nr < arr.length &&
      nc >= 0 && nc < arr[0].length &&
      !arr[nr][nc]
    )
      openNeighbors = [...openNeighbors, [nr, nc]]
  }

  return openNeighbors;
}