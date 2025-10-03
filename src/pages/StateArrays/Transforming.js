import { useState } from "react";

export default function Transforming() {
  const [numbers, setNumbers] = useState([
    { id: 0, value: 10 },
    { id: 1, value: 20 },
    { id: 2, value: 30 },
  ]);

  return (
    <>
      <h1>Numbers</h1>
      <button
        onClick={() =>
          setNumbers(
            numbers.map((number) => ({
              ...number,
              value: number.value * 2,
            }))
          )
        }
      >
        Click
      </button>
      {numbers.map((number) => (
        <p key={number.id}>{number.value}</p>
      ))}
    </>
  );
}
