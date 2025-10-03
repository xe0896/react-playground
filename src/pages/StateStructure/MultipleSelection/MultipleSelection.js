import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MultipleSelection() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    setSelectedIds((prev) => {
      if (prev.includes(toggledId)) {
        return prev.filter((id) => id !== toggledId);
      } else {
        return [...prev, toggledId];
      }
    });
  }

  const selectedCount = letters.reduce((acc, letter) => {
    if (letter.isTicked) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              letter.id ===
              selectedIds.find((id) => {
                return id === letter.id;
              })
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedIds.length} letters</b>
        </p>
      </ul>
    </>
  );
}
