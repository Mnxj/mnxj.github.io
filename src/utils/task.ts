import { useHttp } from "./http";
import { useQuery } from "react-query";
import { Task } from "../type/task";

export const useTasks = (param?: Partial<Task>) => {
  const client = useHttp();

  return useQuery<Task[]>(["tasks", param], () =>
    client("tasks", { data: param })
  );
};
