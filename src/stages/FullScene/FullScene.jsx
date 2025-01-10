import TextBox from '../../features/textBox/TextBox';
import structuralStyles from './FullScene.module.css';
import { selectScenery } from '../../features/scene/sceneSlice';
import { useSelector } from 'react-redux';

const FullScene = () => {
  const scenery = useSelector(selectScenery);

  return (
    <div
      style={{
        backgroundImage: `url(${scenery})`,
      }}
      className={structuralStyles.scenario}
    >
      <div className={structuralStyles.scene}>
        <TextBox translucent />
      </div>
    </div>
  );
};

export default FullScene;
