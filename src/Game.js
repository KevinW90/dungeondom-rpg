// React
import { useState } from "react";

// UI
import Room from "./ui/Room/Room";

// JS
import createHero from "./data/hero";
import createRoom from "./data/room";

function Game() {
  // eslint-disable-next-line
  const [ hero, setHero ] = useState(createHero());
  // eslint-disable-next-line
  const [ room, setRoom ] = useState(createRoom(10));

  return (
    <div className="App">
      <Room data={room} />
    </div>
  );
}

export default Game;
