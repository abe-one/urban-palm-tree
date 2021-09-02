import { API } from "../MockAPI";

//\\\\\\\\\\\\\\\\\\\ ACTION TYPES \\\\\\\\\\\\\\\\\\\\\

export const FETCH_LOTS_SUCCESS = "FETCH_LOTS_SUCCESS";
export const TOGGLE_SAVED_LOTS = "TOGGLE_SAVED_LOTS";
export const FETCH_HOME_PLANS_SUCCESS = "FETCH_HOME_PLANS_SUCCESS";
export const TOGGLE_SAVED_HOME_PLANS = "TOGGLE_SAVED_HOME_PLANS";
export const FETCH_COMBINATIONS_SUCCESS = "FETCH_COMBINATIONS_SUCCESS";

//\\\\\\\\\\\\\\\\\\\ ACTIONS \\\\\\\\\\\\\\\\\\\\\

//? While following actions could be broken down they are not for the time being because the additional complexity doesn't seem justified against the current clarity

export const fetchLots = () => {
  const lots = API.getLots();
  return { type: FETCH_LOTS_SUCCESS, payload: lots };
};

export const toggleSavedLots = (index) => {
  return { type: TOGGLE_SAVED_LOTS, payload: index };
};
export const fetchHomePlans = () => {
  const lots = API.getHomePlans();
  return { type: FETCH_HOME_PLANS_SUCCESS, payload: lots };
};

export const toggleSavedHomePlans = (index) => {
  return { type: TOGGLE_SAVED_HOME_PLANS, payload: index };
};

export const fetchCombinations = () => {
  const combos = API.getCombinations();
  return { type: FETCH_COMBINATIONS_SUCCESS, payload: combos };
};
