import { useDispatch, useSelector } from "react-redux";
import { hide, selectIsShowingLoadGame, show } from "./loadGameSlice";

const useLoadGameScreen = () => {
  const dispatch = useDispatch();
  const isShow = useSelector(selectIsShowingLoadGame);

  const loadGame = () => {};

  const toggleMenu = () => {
    dispatch(isShow ? hide() : show());
  };

  return { toggleMenu, loadGame };
};

export default useLoadGameScreen;
