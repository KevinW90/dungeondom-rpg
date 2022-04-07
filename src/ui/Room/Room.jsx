// React

// UI
import Tile from "./Tile/Tile";

// JS
import "./room.css";



export default function Room({ data, children }) {
  // TODO: set tile size based on window size
  // TODO: set maxTiles based on map size

  return (
    <div className="map">
      {data.map((tile, ndx) => <Tile data={tile} key={ndx} />)}
      {children}
    </div>
  )
}