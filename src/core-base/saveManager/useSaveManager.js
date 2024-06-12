import { useDispatch } from "react-redux";
import { newSave, saveOverride } from "./saveManagerSlice";

const useSettings = () => {
  const dispatch = useDispatch();

  const saveNew = (manualSave) => {
    dispatch(newSave(manualSave));
  };

  const saveOverride = () => {
    dispatch(saveOverride(savePosition));
  };

  return { saveNew, loadGame };
};

export default useSettings;
