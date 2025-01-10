import { useSelector } from 'react-redux';
import { selectStage } from './sceneSlice';
import FullScene from '../../stages/FullScene/FullScene';
import Conversation from '../../stages/Conversation/Conversation';

export default function Scene() {
  const stage = useSelector(selectStage);

  const stages = {
    FullScene: () => <FullScene />,
    Conversation: () => <Conversation />,
  };
  return stage ? stages[stage]() : null;
}
