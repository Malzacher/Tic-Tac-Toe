import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  let edittablePlayerName = <span className="player-name">{playerName}</span>;

  function handleEditClick() {
    setIsEditting((edittingState) => !edittingState);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  if (isEditting) {
    edittablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {edittablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}
