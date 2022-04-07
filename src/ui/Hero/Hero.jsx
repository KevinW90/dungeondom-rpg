import "./hero.css";


export default function Hero({ data }) {
  console.log(data)
  const left = data ? data.position.x + (( 20 - 15 ) / 2) : 0;
  const top = data ? data.position.y + (( 20 - 15 ) / 2) : 0;
  return (
    <div 
      className="player"
      style={{'left': left, 'top': top}}
    >

    </div>
  )
}