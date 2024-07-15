import { useDispatch, useSelector } from "react-redux";
import { hide, selectIsShowingSaveGame, show } from "./saveGameSlice";

const useSaveGameScreen = () => {
  const dispatch = useDispatch();
  const isShow = useSelector(selectIsShowingSaveGame);

  const saveGame = () => {};

  const toggleMenu = () => {
    dispatch(isShow ? hide() : show());
  };

  const showSaveGameScreen = () => {
    dispatch(show());
  };

  const hideSaveGameScreen = () => {
    dispatch(hide());
  };

  return { toggleMenu, saveGame, showSaveGameScreen, hideSaveGameScreen };
};

export default useSaveGameScreen;
