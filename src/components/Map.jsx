import "../styles/map.css";
import Tile from "../components/Tile";
import { useState, useEffect } from "react";
import { 
  createGenesisTile, 
  tileArr,
  checkOpenNeighbors,
  chooseRandomTile
} from "../utils/tiles";

function Map() {
  const [ tiles, setTiles ] = useState([]);
  const maxTiles = 10;  

  useEffect(() => {
    let genesisTile = createGenesisTile();
    tileArr.push(genesisTile);

    for (let i = 1; i < maxTiles; i++) {
      let neighbors = checkOpenNeighbors(tileArr[i-1]);
      while (!neighbors.length)
        neighbors = checkOpenNeighbors(chooseRandomTile());

      tileArr.push(chooseRandomTile(neighbors));
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