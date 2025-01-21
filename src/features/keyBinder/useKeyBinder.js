import { useCallback, useEffect } from 'react';

const useKeyBinder = (key, action, repeatable = false) => {
  const checkBinders = useCallback(
    (event) => event.key === key && (repeatable || !event.repeat) && action(),
    [action, key],
  );
  useEffect(() => {
    document.addEventListener('keydown', checkBinders, false);
  }, []);

  return true;
};

export default useKeyBinder;
