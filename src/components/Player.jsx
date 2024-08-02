import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditting, setIsEditting] = useState(false);

  function handleEditClick() {
    if (isEditting) {
      setIsEditting(false);
    } else {
      setIsEditting(true);
    }
  }

  let buttonName = "Edit";
  let playerName = <span className="player-name">{name}</span>;

  if (isEditting) {
    playerName = <input type="text" required />;
    buttonName = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonName}</button>
    </li>
  );
}
