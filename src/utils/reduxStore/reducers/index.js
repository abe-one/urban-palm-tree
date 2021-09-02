import { FETCH_LOTS_SUCCESS, TOGGLE_SAVED_LOTS } from "../actions";

const initialState = {
  errorMessage: "",
  lots: {
    data: [],
    apiCallStatus: "loading", // 3-state machine: "pending", "successful", "error"
  },
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
        lots: { ...state.lots, data: fetchedLots },
      };

    case TOGGLE_SAVED_LOTS: // expected payload: lots array index
      const targetIndex = action.payload;
      return {
        ...state,
        lots: state.lots.data.map((lot, index) =>
          index === targetIndex ? { ...lot, saved: !lot.saved } : lot
        ),
      };

    default:
      return state;
  }
};
