import structuralStyles from './TitleScreen.module.css';
import useTitleScreen from './useTitleScreen';
import MenuItem from '../../core-base/MenuItem';
import { Text } from '../../core-base/Text';

const Welcome = () => {
  const { newGame, continueGame, showLoadGame, showSettings } = useTitleScreen();
  const items = [
    { label: 'New Game', action: newGame },
    { label: 'Continue', action: continueGame },
    { label: 'Load Game', action: showLoadGame },
    { label: 'Settings', action: showSettings },
    { label: 'Exit' },
  ];

  return (
    <div className={structuralStyles.container}>
      <img width="400px" src="/logo.png" alt="Game Logo" />
      <ul className={structuralStyles.list}>
        {items.map((item) => (
          <MenuItem
            extraClass={[structuralStyles.itemMenu]}
            key={item.label}
            action={item.action}
            label={
              <Text type="ui" as="h3">
                {item.label}
              </Text>
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default Welcome;
