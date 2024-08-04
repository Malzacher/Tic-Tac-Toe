import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  let edittablePlayerName = <span className="player-name">{name}</span>;

  function handleEditClick() {

    // if (isEditting) {
    //   setIsEditting(false);
    // } else {
    //   setIsEditting(true);
    // }

    // {isEditting ? setIsEditting(false) : setIsEditting(true)}

    // setIsEditting(isEditting ? false : true);

    setIsEditting((edittingState) => !edittingState) // Ideal way to do (Instantanious)
  }

  if (isEditting) {
    edittablePlayerName = <input type="text" required value={edittablePlayerName} />;
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
