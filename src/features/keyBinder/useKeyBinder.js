/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";

const useKeyBinder = (key, action) => {
  const checkBinders = useCallback(
    (event) => event.key === key && action(),
    []
  );
  useEffect(() => {
    document.addEventListener("keydown", checkBinders, false);
    console.debug("registered keydown");
  }, []);

  return true;
};

export default useKeyBinder;
