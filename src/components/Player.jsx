import "../styles/player.css";


function Player({ p: { position } }) {
  const left = position.x + ((20 - 15) / 2);
  const top = position.y + ((20 - 15) / 2);
  return (
    <div 
      className="player"
      style={{'left': left, 'top': top, 'width': '15px', 'height': '15px', 'position': 'absolute'}}
    >

    </div>
  )
}

export default Player;