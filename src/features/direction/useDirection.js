import { useDispatch } from 'react-redux';

import { enqueuDirection as enqueu, dequeueDirection as dequeue } from './directionSlice';

const useDirections = () => {
  const dispatch = useDispatch();

  const enqueuDirection = (direction) => {
    dispatch(enqueu(direction));
  };

  const dequeueDirection = () => {
    dispatch(dequeue());
  };

  return { enqueuDirection, dequeueDirection };
};

export default useDirections;
