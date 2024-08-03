import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditting, setIsEditting] = useState(false);

  let playerName = <span className="player-name">{name}</span>;

  function handleEditClick() {
    if (isEditting) {
      setIsEditting(false);
    } else {
      setIsEditting(true);
    }
  }

  if (isEditting) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}