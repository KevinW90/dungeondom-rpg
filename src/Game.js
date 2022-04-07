// React
import { useEffect, useState } from "react";

// UI
import Room from "./ui/Room/Room";

// JS
import createHero from "./data/hero";
import createRoom from "./data/room";
import Hero from "./ui/Hero/Hero";

function Game() {
  // eslint-disable-next-line
  const [ hero, setHero ] = useState(null);
  // eslint-disable-next-line
  const [ room, setRoom ] = useState(createRoom(10));

  useEffect(() => {
    if (!hero) setHero(createHero({
      name: 'Kevin',
      position: room[0]
    }))
  }, [hero, room])

  return (
    <div className="App">
      <Room data={room}>
        <Hero data={hero} />
      </Room>
    </div>
  );
}

export default Game;
