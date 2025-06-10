import structuralStyles from './useSettingsScreen';

import MenuItem from '../../core-base/MenuItem';

import useSettings from './useSettingsScreen';
import MenuTemplate from '../../core-base/core-ui/MenuCore';

const LoadGameScreen = () => {
  const { toggleMenu } = useSettings();

  const savedGames = [];

  return (
    <MenuTemplate title="Settings" subtitle="Adjust your gameplay here" active="settings" toggleMenu={toggleMenu}>
      <ul className={structuralStyles.list}>
        {savedGames.map((item) => (
          <MenuItem
            extraClass={[structuralStyles.itemMenu]}
            key={item.saveSlot}
            action={item.action}
            label={item.label}
          />
        ))}
      </ul>
    </MenuTemplate>
  );
};

export default LoadGameScreen;
