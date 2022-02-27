import { useHttp } from "./http";
import { useQuery } from "react-query";
import { TaskType } from "../type/TaskType";

export const useTaskTypes = () => {
  const client = useHttp();

  return useQuery<TaskType[]>(["taskTypes"], () => client("taskTypes"));
};
