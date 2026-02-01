import { useDispatch } from 'react-redux';

import { enqueueDirection as enqueue, dequeueDirection as dequeue } from './directionSlice';

const useDirections = () => {
  const dispatch = useDispatch();

  const enqueueDirection = (direction) => {
    dispatch(enqueue(direction));
  };

  const dequeueDirection = () => {
    dispatch(dequeue());
  };

  return { enqueueDirection, dequeueDirection };
};

export default useDirections;
