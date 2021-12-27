import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === "0" ? false : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export const useDebounce = <V>(value: V, delay?: number): any => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    //每次value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //清理上一个useEffect处理完以后在运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
