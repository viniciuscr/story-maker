import { useCallback, useEffect } from "react";

const useKeyBinder = (key, action) => {
  const checkBinders = useCallback(
    (event) => event.key === key && action(),
    [action, key]
  );
  useEffect(() => {
    document.addEventListener("keydown", checkBinders, false);
  }, [checkBinders]);

  return true;
};

export default useKeyBinder;
