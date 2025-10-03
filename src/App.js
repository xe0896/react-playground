import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Children from "./pages/Children";
import Conditional from "./pages/Conditional";
import Interactivity from "./pages/Interactivity";
import States from "./pages/States";
import Lists from "./pages/Lists";
import StateObjects from "./pages/StateObjects";
import DynamicRouting from "./pages/DynamicRouting/DynamicRouting";
import StateArrays from "./pages/StateArrays/StateArrays";
import StateInput from "./pages/StateInput/StateInput";
import StateStructure from "./pages/StateStructure/StateStructure";
import SharingStates from "./pages/SharingStates/SharingStates";

export default function App() {
  const URLObjects = {
    children: Children,
    conditionals: Conditional,
    lists: Lists,
    interactivity: Interactivity,
    states: States,
    stateobjects: StateObjects,
    dynamicrouting: DynamicRouting,
    statearrays: StateArrays,
    stateinput: StateInput,
    statestructure: StateStructure,
    sharingstates: SharingStates,
  };
  return (
    <div>
      <NavBar URLs={URLObjects}>
        <a href="https://react.dev/learn" style={{ color: "white" }}>
          <b>Resources</b>
        </a>{" "}
        |
      </NavBar>
      <Routes>
        {Object.entries(URLObjects).map(([path, Component]) => (
          <Route path={"/" + path + "/*"} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}
