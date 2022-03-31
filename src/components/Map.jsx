import "../styles/map.css";
import Tile from "../components/Tile";
import { useState, useEffect } from "react";
import { 
  createGenesisTile, 
  tileArr,
  checkOpenNeighbors,
  chooseRandomTile
} from "../utils/tiles";

const createMap = (numTiles) => {
  let genesisTile = createGenesisTile();
  tileArr.push(genesisTile);

  for (let i = 1; i < numTiles; i++) {
    let neighbors = checkOpenNeighbors(tileArr[i-1]);
    while (!neighbors.length)
      neighbors = checkOpenNeighbors(chooseRandomTile());

    tileArr.push(chooseRandomTile(neighbors));
  }

  return tileArr;
}

function Map() {
  const [ map, setMap ] = useState([]);
  const maxTiles = 10;  

  useEffect(() => {
    setMap(createMap(maxTiles));
  }, [])

  // TODO: set tile size based on window size
  // TODO: set maxTiles based on map size

  return (
    <div className="map">
      {
        map.map((tile, ndx) => <Tile data={tile} key={ndx} />)
      }
    </div>
  )
}

export default Map;