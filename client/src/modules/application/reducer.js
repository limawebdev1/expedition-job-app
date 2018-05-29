import * as types from './actionTypes';

const initialState = {
  isFetching: false,
  isStale: true,
  value: {
    id: null,
    user_id: null,
    yrs_total: 0,
    yrs_hvac: 0,
    yrs_mechanical: 0,
    yrs_refrigeration: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_APP_STALE:
      return {
        ...state,
        isStale: true,
      };
    case types.FETCH_USER_APP_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case types.FETCH_USER_APP_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case types.FETCH_USER_APP_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};