const tileSize = 16;
const dirOffsets = {
  'n': {x: 0, y: -1},
  'e': {x: 1, y: 0},
  's': {x: 0, y: 1},
  'w': {x: -1, y: 0}
}

export default function createTileMap(rows, cols) {
  console.log('creating map with ', rows, ' rows and ', cols, ' cols');
  let tileMap = Array.from({length: rows}, _ => new Array(cols).fill(0));
  console.log(tileMap)

  // create a genesis tile
  let genR = Math.floor(Math.random() * rows);
  let genC = Math.floor(Math.random() * cols);
  console.log('genesis: ', genR, genC)
  tileMap[genR][genC] = 1;

  // create as many tiles as needed
  let maxTiles = Math.floor((rows * cols) * .6);
  let curR = genR;
  let curC = genC;
  for (let i = 1; i < maxTiles; i++) {  
    let neighbors = checkOpenNeighbors(curR, curC, tileMap);
    console.log('neighbors for [', curR, ',', curC, ']', neighbors)
    while (!neighbors.length) {
      console.log('no neighbors')
      let [ r, c ] = chooseRandomTile(tileMap)
      neighbors = checkOpenNeighbors(r, c, tileMap);
    }

    [ curR, curC ] = neighbors[Math.floor(Math.random() * neighbors.length)];
    tileMap[curR][curC] = 1;
  }

  // return the created room
  return tileMap;
}

// const createTile = () => {
//   return {
//     x: Math.floor(Math.random()*(mw - tileSize + 1)),
//     y: Math.floor(Math.random()*(mh - tileSize + 1))
//   }
// }

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
  
  for (const [ dir, offset] of Object.entries(dirOffsets)) {
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