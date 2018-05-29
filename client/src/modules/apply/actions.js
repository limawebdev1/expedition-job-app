import * as types from './actionTypes';
import { get, post } from '../../utils/fetch';
import { setAuthToken } from '../../utils/auth';
import { actions as flareActions } from '../global/flare';

const signupUserSuccess = () => {
  return {
    type: types.SIGNUP_USER_SUCCESS,
  };
};
const signupUserFailure = () => {
  return {
    type: types.SIGNUP_USER_FAILURE,
  };
};

const signinUserSuccess = () => {
  return {
    type: types.SIGNIN_USER_SUCCESS,
  };
};

const signinUserFailure = () => {
  return {
    type: types.SIGNIN_USER_FAILURE,
  };
};

export const signupUser = user => {
	return async dispatch => {
		try {
			const { token } = await post('/api/signup', user);
			setAuthToken(token);
      dispatch(signupUserSuccess());
      return true;
		} catch (e) {
      const { error } = e;
      dispatch(flareActions.clearFlareMessage());
			dispatch(flareActions.pushFlareMessage({ message: error }));
			dispatch(signupUserFailure());
		}
	};
};

export const signinUser = user => {
  return async dispatch => {
    try {
      const { token } = await post('/api/signin', user);
      setAuthToken(token);
      dispatch(signinUserSuccess());
      return true;
    } catch (e) {
      const { error } = e;
      dispatch(flareActions.clearFlareMessage());
      dispatch(flareActions.pushFlareMessage({ message: error }));
      dispatch(signinUserFailure());
    }
  };
};