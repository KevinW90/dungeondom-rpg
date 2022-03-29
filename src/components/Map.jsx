import "../styles/map.css";
import Tile from "../components/Tile";
import { useState, useEffect } from "react";

function Map() {
  const [ tiles, setTiles ] = useState([]);

  const dirOffset = {
    'n': {x: 0, y: -1},
    'e': {x: 1, y: 0},
    's': {x: 0, y: 1},
    'w': {x: -1, y: 0}
  }

  const dirs = ['n', 'e', 's', 'w'];
  const maxTiles = 5;

  useEffect(() => {
    let tileArr = [];
    let point = {
      x: Math.floor(Math.random()*281),
      y: Math.floor(Math.random()*281)
    }
    for (let i = 1; i <= maxTiles; i++) {
      tileArr.push(point);
      // choose direction
      const direction = dirs[Math.floor(Math.random()*dirs.length)];
      console.log(direction);
      const x = tileArr[i-1].x + 20*dirOffset[direction].x;
      const y = tileArr[i-1].y + 20*dirOffset[direction].y;
      console.log(x)
      console.log(y)
      point = {x,y};
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