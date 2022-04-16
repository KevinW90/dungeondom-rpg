import { useEffect } from "react";
import "./game.css";
import Map from "../Map/Map";

export default function Game() {
  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <div className="game-container">
      <Map />
    </div>
  )
}