import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPalyerName, setenteredPalyerName] = useState(null);

  function handleSubmit() {
    setenteredPalyerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPalyerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
