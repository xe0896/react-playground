import { NavLink, Routes, Route } from "react-router-dom";
import TaskRenderer from "./TaskRenderer";

export default function NestedRoutes({ tasks, url }) {
  return (
    <>
      <nav>
        {tasks.map((task, index, array) => (
          <span>
            <NavLink key={task.id} to={`/${url}/${task.id}`}>
              {task.name}
            </NavLink>
            {index < array.length - 1 && " | "}
          </span>
        ))}
      </nav>
      <Routes>
        <Route path=":id" element={<TaskRenderer tasks={tasks} />} />
      </Routes>
    </>
  );
}
