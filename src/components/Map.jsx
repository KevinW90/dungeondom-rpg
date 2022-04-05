import "../styles/map.css";
import Tile from "../components/Tile";
import Player from "./Player";
import { useState, useEffect } from "react";
import { 
  createGenesisTile, 
  tileArr,
  checkOpenNeighbors,
  chooseRandomTile
} from "../utils/tiles";

const createMap = (genesisTile, numTiles) => {
  tileArr.push(genesisTile);

  for (let i = 1; i < numTiles; i++) {
    let neighbors = checkOpenNeighbors(tileArr[i-1]);
    while (!neighbors.length)
      neighbors = checkOpenNeighbors(chooseRandomTile());

    tileArr.push(chooseRandomTile(neighbors));
  }

  return tileArr;
}

function Map({ player }) {
  const [ map, setMap ] = useState([]);
  const maxTiles = 10;  

  useEffect(() => {
    let genesisTile = createGenesisTile();
    player.position = genesisTile;
    setMap(createMap(genesisTile, maxTiles));
  }, [player])

  // TODO: set tile size based on window size
  // TODO: set maxTiles based on map size

  return (
    <div className="map">
      {
        map.map((tile, ndx) => <Tile data={tile} key={ndx} />)
      }
      <Player p={player} />
    </div>
  )
}

export default Map;