import * as types from './actionTypes';
import { get, post, shouldFetch } from '../../utils/fetch';
import { actions as flareActions } from '../global/flare';
import { getAll } from './selectors';

export const setUserAppStale = () => {
  return {
    type: types.SET_USER_APP_STALE,
    payload: {
      isStale: true
    }
  };
};

export const fetchUserAppRequest = () => {
  return {
    type: types.FETCH_USER_APP_REQUEST,
    payload: {
      isFetching: true,
      isStale: false,
    }
  };
};

export const fetchUserAppSuccess = value => {
  return {
    type: types.FETCH_USER_APP_SUCCESS,
    payload: {
      isFetching: false,
      value,
    }
  };
};

export const fetchUserAppFailure = () => {
  return {
    type: types.FETCH_USER_APP_FAILURE,
    payload: {
      isFetching: false,
    }
  };
};

const submitExperienceSuccess = () => {
  return {
    type: types.SUBMIT_EXPERIENCE_SUCCESS,
  };
};
const submitExperienceFailure = () => {
  return {
    type: types.SUBMIT_EXPERIENCE_FAILURE,
  };
};

export const submitExperience = experience => {
	return async dispatch => {
		try {
      experience.view === 'A' ? experience.variant_A = true : experience.variant_B = true;
      delete experience.view;
			await post('/api/applications', experience);
      dispatch(submitExperienceSuccess());
      return true;
		} catch (e) {
      const { error } = e;
      dispatch(flareActions.clearFlareMessage());
			dispatch(flareActions.pushFlareMessage({ message: error }));
			dispatch(submitExperienceFailure());
		}
	};
};

export const fetchUserApplication = () => {
  return async (dispatch, getState) => {
    const userAppEntity = getAll(getState());
    if (!shouldFetch(userAppEntity)) {
      return;
    }
    dispatch(fetchUserAppRequest());
    try {
      const userApp = await get('/api/applications');
      dispatch(fetchUserAppSuccess(userApp));
    } catch (e) {
      dispatch(fetchUserAppFailure());
    }
  };
};
