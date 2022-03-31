import "../styles/map.css";
import Tile from "../components/Tile";
import { useState, useEffect } from "react";

function Map() {
  const [ tiles, setTiles ] = useState([]);
  const maxTiles = 5;

  const tileExists = (arr, tile) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].x === tile.x && arr[i].y === tile.y)
        return true;
    }

    return false;
  }

  useEffect(() => {
    let currentTile = {
      x: Math.floor(Math.random()*281),
      y: Math.floor(Math.random()*281)
    }
    let tileArr = [currentTile];

    const checkOpenNeighbors = (currentTile) => {
      const dirOffset = {
        'n': {x: 0, y: -1},
        'e': {x: 1, y: 0},
        's': {x: 0, y: 1},
        'w': {x: -1, y: 0}
      }
      let dirs = ['n', 'e', 's', 'w'];
  
      let openNeighbors = [];
      // for each direction
      dirs.forEach(d => {
        let neighborTile = {
          x: currentTile.x + dirOffset[d].x*20,
          y: currentTile.y + dirOffset[d].y*20
        }
        console.log('dir: ', d, ' nt: ', neighborTile)
        let tileExistence = tileExists(tileArr, neighborTile);
        console.log(tileExistence)
        if (!tileExistence)
          openNeighbors = [...openNeighbors, neighborTile]
      })
  
      return openNeighbors;
    }
    
    for (let i = 1; i < maxTiles; i++) {
      let neighbors = checkOpenNeighbors(tileArr[i-1]);
      console.log('iterator: ', i)
      console.log('neighbors: ', neighbors)
      while (!neighbors.length)
        neighbors = checkOpenNeighbors(tileArr, tileArr[Math.floor(Math.random()*tileArr.length)]);
      let rndNeighbor = neighbors[Math.floor(Math.random()*neighbors.length)]
      tileArr.push(rndNeighbor)  
    }

    setTiles(tileArr);
  }, [])

  

  return (
    <div className="map">
      {
        tiles.map((tile, ndx) => <Tile data={tile} key={ndx} />)
      }
    </div>
  )
}

export default Map;