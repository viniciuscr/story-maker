import { useDispatch } from "react-redux";

import { setStatus, selectStatus } from "./statusSlice";

const useStatus = (defaultPath) => {
  const dispatch = useDispatch();

  const set = (value, path) => {
    dispatch(setStatus({ value, path: path ?? defaultPath }));
  };

  const get = (path) => selectStatus(path ?? defaultPath);

  return [get, set];
};

export default useStatus;
