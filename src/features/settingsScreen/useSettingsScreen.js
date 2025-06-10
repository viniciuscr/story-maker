import { useDispatch, useSelector } from 'react-redux';
import { hide, show } from './settingsSlice';
import { selectIsShowingSettingsScreen } from './settingsSlice';

const useSettings = () => {
  const dispatch = useDispatch();

  const isShow = useSelector(selectIsShowingSettingsScreen);

  const toggleMenu = () => {
    dispatch(isShow ? hide() : show());
  };

  const showSettingsScreen = () => {
    dispatch(show());
  };

  const hideSettingsScreen = () => {
    dispatch(hide());
  };

  return { toggleMenu, showSettingsScreen, hideSettingsScreen };
};

export default useSettings;
