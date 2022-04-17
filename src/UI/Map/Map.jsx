import { useRef, useEffect, useState } from "react"
import createTileMap from "../../data/room";

export default function Map() {
  // TODO: create an entire room with tile objects that tell what each tile has in it
  /*
    Tile = {
      existsL bool,
      row: Number,
      col: Number,
      contents: Entity,
      image: Image
    }
  */
  const [ layer1, setLayer1 ] = useState(createTileMap(9, 16));
  const gameCanvas = useRef(null);

  useEffect(() => {
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