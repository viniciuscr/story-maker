import { useSelector } from 'react-redux';
import { selectActorsInScene, selectOnStage } from '../scene/sceneSlice';

const useActor = (actor) => {
  const onStage = useSelector(selectOnStage) ?? [];
  const actors = useSelector(selectActorsInScene);

  if (!actors) {
    console.warn('useActor: no actors in scene');
    return { actorsOnStage: [] };
  }

  return {
    actorsOnStage: onStage.map((actorKey) => actors[actorKey]),
    ...(actor ? { profile: actors[actor] } : {}),
  };
};

export default useActor;
