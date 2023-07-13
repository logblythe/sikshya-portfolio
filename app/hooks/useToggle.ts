import { useCallback, useState } from "react";

export function useToggle(
  initial = false
): [state: boolean, toggle: () => void] {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState((prev) => !prev), []);

  return [state, toggle];
}
