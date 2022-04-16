import { useRef, useEffect, useState } from "react"
import createTileMap from "../../data/room";

export default function Map() {
  const [ layer1, setLayer1 ] = useState(createTileMap(9, 16));
  const gameCanvas = useRef(null);

  useEffect(() => {
    // create floor map
    
    const ctx = gameCanvas.current.getContext("2d");
    layer1.forEach((row, rndx) => {
      row.forEach((col, cndx) => {
        if (col) {
          ctx.beginPath();
          ctx.rect(cndx * 16, rndx * 16, 16, 16);
          ctx.fillStyle = "red";
          ctx.fill();
        }
      })
    })
    
  }, [layer1]);

  return(
    <canvas ref={gameCanvas} className="game-canvas" width="256" height="144"></canvas>
  )
}