import "./tile.css";


function Tile({ data }) {
  return (
    <div className="tile" style={{'left': data.x, 'top': data.y}}>

    </div>
  )
}

export default Tile;