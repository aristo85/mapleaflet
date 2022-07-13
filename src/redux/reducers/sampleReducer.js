import {
  FETCH_RANDOM_DATA,
  FETCH_RANDOM_DATA_FILED,
  FETCH_RANDOM_DATA_SUCCEEDED,
  SET_SELECTED_POINTS,
} from "../const";

const initialState = {
  fetching: false,
  dataPoints: null,
  error: null,
  selectedPoints: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_DATA:
      return { ...state, fetching: true, error: null };
    case FETCH_RANDOM_DATA_SUCCEEDED:
      return { ...state, fetching: false, dataPoints: action.data };
    case FETCH_RANDOM_DATA_FILED:
      return {
        ...state,
        fetching: false,
        dataPoints: null,
        error: action.error,
      };
    case SET_SELECTED_POINTS:
      return { ...state, selectedPoints: action.data };
    default:
      return state;
  }
};
