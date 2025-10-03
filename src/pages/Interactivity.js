import "./ToolBar.css";

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Interactivity() {
  return (
    <div>
      <button
        onClick={() => {
          alert("A button has been pressed");
        }}
      >
        {" "}
        Click{" "}
      </button>

      <div
        className="Toolbar"
        onClick={() => {
          alert("ToolBar");
        }}
      >
        <Button
          onClick={() => {
            alert("First button pressed");
          }}
        >
          First button
        </Button>
        <Button
          onClick={() => {
            alert("Second button pressed");
          }}
        >
          Second button
        </Button>
        Event propagation handled.
      </div>
      <br></br>
      <EventPropagation />
    </div>
  );
}

function EventPropagation() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("This is the navigation bar");
      }}
    >
      <button
        onClick={() => {
          alert("Home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          alert("About");
        }}
      >
        About
      </button>
      Event propogation not handled.
    </div>
  );
}
