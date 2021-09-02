import { API } from "../MockAPI";

//\\\\\\\\\\\\\\\\\\\ ACTION TYPES \\\\\\\\\\\\\\\\\\\\\

export const FETCH_LOTS_SUCCESS = "FETCH_LOTS_SUCCESS";
export const TOGGLE_SAVED_LOTS = "TOGGLE_SAVED_LOTS";
export const FETCH_HOME_PLANS_SUCCESS = "FETCH_HOME_PLANS_SUCCESS";
export const TOGGLE_SAVED_HOME_PLANS = "TOGGLE_SAVED_HOME_PLANS";
export const FETCH_COMBINATIONS = "FETCH_COMBINATIONS";

//\\\\\\\\\\\\\\\\\\\ ACTIONS \\\\\\\\\\\\\\\\\\\\\

export const fetchLots = () => {
  const lots = API.getLots();
  return { type: FETCH_LOTS_SUCCESS, payload: lots };
};

export const toggleSavedLots = () => {
  return { type: TOGGLE_SAVED_LOTS };
};
export const fetchHomePlans = () => {
  const lots = API.getHomePlans();
  return { type: FETCH_HOME_PLANS_SUCCESS, payload: lots };
};

export const toggleSavedHomePlans = () => {
  return { type: TOGGLE_SAVED_HOME_PLANS };
};

export const fetchCombinations = () => {
  const combos = API.getCombinations();
  return { type: FETCH_COMBINATIONS, payload: combos };
};