import TextBox from '../../features/textBox/TextBox';
import structuralStyles from './Conversation.module.css';
import { selectScenery } from '../../features/scene/sceneSlice';
import { useSelector } from 'react-redux';
import OnSpot from './OnSpot';
import useActor from '../../features/actor/useActor';

const Conversation = () => {
  const scenery = useSelector(selectScenery);
  const { actorsOnStage } = useActor();

  return (
    <div
      style={{
        backgroundImage: `url(${scenery})`,
      }}
      className={structuralStyles.scenario}
    >
      <OnSpot actors={actorsOnStage} />
      <div className={structuralStyles.scene}>
        <TextBox translucent />
      </div>
    </div>
  );
};

export default Conversation;
