import { useCallback, useEffect } from 'react';

const useKeyBinder = (key, action) => {
  const checkBinders = useCallback((event) => event.key === key && !event.repeat && action(), [action, key]);
  useEffect(() => {
    document.addEventListener('keydown', checkBinders, false);
  }, []);

  return true;
};

export default useKeyBinder;
