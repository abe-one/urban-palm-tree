//\\\\\\\\\\\\\\\\\\\ ACTION TYPES \\\\\\\\\\\\\\\\\\\\\

import { API } from "../MockAPI";

export const FETCH_LOTS_SUCCESS = "FETCH_LOTS_SUCCESS";
export const TOGGLE_SAVED_LOTS = "TOGGLE_SAVED_LOTS";

//\\\\\\\\\\\\\\\\\\\ ACTIONS \\\\\\\\\\\\\\\\\\\\\

export const fetchLots = () => {
  const lots = API.getLots();
  return { type: FETCH_LOTS_SUCCESS, payload: lots };
};

export const toggleSavedLots = () => {
  return { type: TOGGLE_SAVED_LOTS };
};
