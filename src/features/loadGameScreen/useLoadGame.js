import { useDispatch, useSelector } from "react-redux";
import { hide, selectIsShowingLoadGame, show } from "./loadGameSlice";

const useLoadGameScreen = () => {
  const dispatch = useDispatch();
  const isShow = useSelector(selectIsShowingLoadGame);

  const loadGame = (save) => {
    if (save.text === "empty") return;
    console.debug("loading save", save);
    const saves = JSON.parse(localStorage.getItem("autosave")).saves ?? [];
    localStorage.setItem(
      "autosave",
      JSON.stringify({
        ...localStorage.getItem(save.saveSlot),
        saves: saves,
      })
    );
    window.location.reload();
  };

  const toggleMenu = () => {
    dispatch(isShow ? hide() : show());
  };

  const showLoadGameScreen = () => {
    dispatch(show());
  };

  const hideLoadGameScreen = () => {
    dispatch(hide());
  };

  return { toggleMenu, loadGame, showLoadGameScreen, hideLoadGameScreen };
};

export default useLoadGameScreen;
