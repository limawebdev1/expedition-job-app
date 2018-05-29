import * as types from './actionTypes';
import { get, post } from '../../utils/fetch';
import { actions as flareActions } from '../global/flare';

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