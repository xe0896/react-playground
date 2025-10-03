import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("Wow");
  return (
    <>
      <Input
        label="First input"
        onChange={(e) => setText(e.target.value)}
        text={text}
      />
      <Input
        label="Second input"
        onChange={(e) => setText(e.target.value)}
        text={text}
      />
    </>
  );
}

function Input({ label, onChange, text }) {
  return (
    <label>
      {label} <input value={text + "haha"} onChange={(e) => onChange(e)} />
    </label>
  );
}
