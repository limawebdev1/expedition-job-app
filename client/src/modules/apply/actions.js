import * as types from './actionTypes';
import { browserHistory } from 'react-router';
import { get, post } from '../../utils/fetch';
import { setAuthToken } from '../../utils/auth';
import { actions as flareActions } from '../global/flare';

const signinUserFailure = () => {
  return {
    type: types.SIGNIN_USER_FAILURE,
  };
};

export const signinUser = user => {
  return async dispatch => {
    try {
      const response = await post('/api/signin', user);
      setAuthToken(response.token);
    } catch (e) {
      const { error } = e;
      dispatch(flareActions.clearFlareMessage());
      dispatch(flareActions.pushFlareMessage({ message: error }));
      dispatch(signinUserFailure());
    }
  };
};