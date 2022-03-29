import "../styles/map.css";
import Tile from "../components/Tile";
import { useState, useEffect } from "react";

function Map() {
  const [ tiles, setTiles ] = useState([]);

  const dirs = {
    'n': {x: 0, y: -1},
    'e': {x: 1, y: 0},
    's': {x: 0, y: 1},
    'w': {x: -1, y: 0}
  }

  const maxTiles = 15;

  useEffect(() => {
    let tileArr = [];
    let point = {
      x: 0,
      y: 0
    }
    for (let i = 1; i <= maxTiles; i++) {
      tileArr.push(point);
      // choose direction
      point = {
        x: tileArr[i-1].x + 20,
        y: 0
      }
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