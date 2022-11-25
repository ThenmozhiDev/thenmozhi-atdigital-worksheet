import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LocalStorageUtils from "./LocalStorageUtils";

export default function LocalValues<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const value = LocalStorageUtils.get(key, defaultValue);
    return value;
  });

  useEffect(() => {
    LocalStorageUtils.store(key, state);
  }, [key, state]);

  return [state, setState];
}
