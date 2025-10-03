import NestedRoutes from "../../NestedRoutes";
import RemoveCSS from "./RemoveCSS";
import EditProfile from "./EditProfile";

export default function StateInput() {
  const tasks = [
    {
      id: 0,
      name: "Click removing CSS",
      component: RemoveCSS,
    },

    {
      id: 1,
      name: "Edit profiles",
      component: EditProfile,
    },
  ];

  return (
    <>
      <NestedRoutes tasks={tasks} url="StateInput" />
    </>
  );
}
