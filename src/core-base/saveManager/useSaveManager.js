import { useDispatch, useStore } from 'react-redux';
import { overrideSave } from './saveManagerSlice';

const useSaveManer = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const date = new Date().toLocaleString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const saveOverride = (saveSlot) => {
    localStorage.setItem(saveSlot, JSON.stringify(store.getState()));
    dispatch(overrideSave({ saveSlot, text: date }));
  };

  return { saveOverride };
};

export default useSaveManer;
