import { IdSelect } from "./id-select";
import React from "react";
import { useTaskTypes } from "../utils/task-type";

export const TaskTypeSelect = (
  props: React.ComponentProps<typeof IdSelect>
) => {
  const { data: taskType } = useTaskTypes();
  return <IdSelect options={taskType || []} {...props} />;
};
