import { NavLink, Routes, Route } from "react-router-dom";
import Task from "./RandomTask/Task";
import Movement from "./Box/Movement";
import TaskRenderer from "../../TaskRenderer";

const tasks = [
  { id: 1, name: "Box", component: Movement },
  { id: 2, name: "Task", component: Task },
];

export default function DynamicRouting() {
  return (
    <>
      <nav>
        {tasks.map((task) => (
          <NavLink key={task.id} to={`/dynamicrouting/${task.id}`}>
            {task.name}
          </NavLink>
        ))}
      </nav>
      <Routes>
        <Route path=":id" element={<TaskRenderer tasks={tasks} />} />
      </Routes>
    </>
  );
}
