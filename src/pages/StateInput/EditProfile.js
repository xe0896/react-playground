import { useState } from "react";
import "./style.css";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <form>
      <div>
        <label>
          <b>First Name: </b>
          {isEditing ? (
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          ) : (
            <b className="input-box">{firstName}</b>
          )}
        </label>
      </div>
      <div>
        <label>
          <b>Last Name: </b>
          {isEditing ? (
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          ) : (
            <b className="input-box">{lastName}</b>
          )}
        </label>
        <div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(!isEditing);
            }}
          >
            {!isEditing ? "Edit Changes" : "Save Changes"}
          </button>
        </div>
        <p>
          <i>Hello, {firstName + " " + lastName + "!"}</i>
        </p>
      </div>
    </form>
  );
}
