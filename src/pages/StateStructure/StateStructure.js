import NestedRoutes from "../../NestedRoutes";
import FeedbackFormAsync from "./FeedbackFormAsync";
import TicketForm from "./TicketForm";
import Menu from "./AvoidingDuplicationStates";
import MultipleSelection from "./MultipleSelection/MultipleSelection";

export default function StateStructure() {
  const tasks = [
    {
      id: 0,
      name: "FeedbackFormAsync (async practise + efficient state vars)",
      component: FeedbackFormAsync,
    },
    {
      id: 1,
      name: "Ticket form (efficient task)",
      component: TicketForm,
    },
    {
      id: 2,
      name: "Avoiding duplication state (efficient task)",
      component: Menu,
    },
    {
      id: 3,
      name: "Multiple selection form",
      component: MultipleSelection,
    },
  ];
  return (
    <>
      <NestedRoutes tasks={tasks} url="StateStructure" />
    </>
  );
}
