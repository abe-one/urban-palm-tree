import {
  FETCH_LOTS_SUCCESS,
  TOGGLE_SAVED_LOTS,
  FETCH_HOME_PLANS_SUCCESS,
  TOGGLE_SAVED_HOME_PLANS,
  FETCH_COMBINATIONS_SUCCESS,
} from "../actions";

const initialFetchState = {
  data: [],
  apiCallStatus: "loading", // 3-state machine: "pending", "successful", "error"
  errorMessage: "",
};

const initialState = {
  lots: initialFetchState,
  homePlans: initialFetchState,
  combinations: initialFetchState,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOTS_SUCCESS: // expected payload: array of lot objects
      const fetchedLots = action.payload.map((lot) => {
        const fetchedLot = { ...lot, saved: false };
        return fetchedLot;
      });
      return {
        ...state,
        lots: {
          ...state.lots,
          data: fetchedLots,
          errorMessage: "",
          apiCallStatus: "successful",
        },
      };

    case TOGGLE_SAVED_LOTS: {
      const targetIndex = action.payload;
      const updatedLots = state.lots.data.map((lot, index) =>
        index === targetIndex ? { ...lot, saved: !lot.saved } : lot
      );
      return {
        ...state,
        lots: { ...state.lots, data: updatedLots },
      };
    }

    case FETCH_HOME_PLANS_SUCCESS:
      const fetchedPlans = action.payload.map((plan) => {
        const fetchedPlan = { ...plan, saved: false };
        return fetchedPlan;
      });
      return {
        ...state,
        homePlans: {
          ...state.homePlans,
          data: fetchedPlans,
          errorMessage: "",
          apiCallStatus: "successful",
        },
      };

    case TOGGLE_SAVED_HOME_PLANS:
      const targetIndex = action.payload;
      const updatedHomePlans = state.homePlans.data.map((plan, index) =>
        index === targetIndex ? { ...plan, saved: !plan.saved } : plan
      );
      return {
        ...state,
        homePlans: { ...state.homePlans, data: updatedHomePlans },
      };

    case FETCH_COMBINATIONS_SUCCESS:
      const fetchedCombinations = action.payload.map((combo) => {
        const fetchedCombo = { ...combo, saved: false };
        return fetchedCombo;
      });
      return {
        ...state,
        homeCombinations: {
          ...state.homeCombinations,
          data: fetchedCombinations,
          errorMessage: "",
          apiCallStatus: "successful",
        },
      };

    default:
      return state;
  }
};
