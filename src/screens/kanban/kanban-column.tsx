import { Kanban } from "../../type/kanban";
import { useTasks } from "../../utils/task";
import { useTasksSearchParams } from "./util";

export const KanbanColumn = ({ kanban }: { kanban: Kanban }) => {
  const { data: allTask } = useTasks(useTasksSearchParams());
  const tasks = allTask?.filter((task) => task.kanbanId === kanban.id);
  return (
    <div>
      {tasks?.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
};
