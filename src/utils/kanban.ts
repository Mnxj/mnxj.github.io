import { useHttp } from "./http";
import { useQuery } from "react-query";
import { Kanban } from "../type/kanban";

export const useKanbans = (param?: Partial<Kanban>) => {
  const client = useHttp();

  return useQuery<Kanban[]>(["kanbans", param], () =>
    client("kanbans", { data: param })
  );
};
