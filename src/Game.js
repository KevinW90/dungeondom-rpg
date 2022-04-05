import { useEffect, useState } from "react";
import Map from "./components/Map";
import { createHero } from "./utils/hero";

function Game() {
  const [ player, setPlayer ] = useState(createHero());

  // create a player on load
  // useEffect(() => {
  //   setPlayer(new Player());
  // }, [])

  return (
    <div className="App">
      <Map player={player} />
    </div>
  );
}

export default Game;
