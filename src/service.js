import { invoke } from '@tauri-apps/api/core';

const isBrowser = () => typeof window.__TAURI_INTERNALS__ === 'undefined';

const useFetch = () => {
  const fetchScene = async (scene) => {
    return await fetch(`/data/${scene}.json`).then((res) => res.json());
  };

  return {
    fetchScene,
  };
};

const useTauri = () => {
  const fetchScene = async (scene) => JSON.parse(await invoke('fetch_scene', { scene }));

  return {
    fetchScene,
  };
};

const useServer = isBrowser() ? useFetch : useTauri;

export default useServer;
