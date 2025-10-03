import SyncedInputs from "./SyncedInputs";
import FilterItems from "./FilteringItems/FilterItems";
import NestedRoutes from "../../NestedRoutes";

export default function SharingStates() {
  const tasks = [
    {
      id: 1,
      name: "SyncedInputs (fix task)",
      component: SyncedInputs,
    },

    {
      id: 2,
      name: "Filter items using search (fix task)",
      component: FilterItems,
    },
  ];

  return (
    <>
      <NestedRoutes tasks={tasks} url="SharingStates" />
    </>
  );
}
