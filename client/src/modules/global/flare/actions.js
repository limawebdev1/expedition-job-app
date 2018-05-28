import * as types from './actionTypes';

export const pushFlareMessage = ({ message }) => {
	return {
		type: types.PUSH_FLARE_MESSAGE,
		payload: {
			message
		}
	};
};

export const popFlareMessage = () => {
	return {
		type: types.POP_FLARE_MESSAGE
	};
};

export const clearFlareMessage = () => {
	return {
		type: types.CLEAR_FLARE_MESSAGE
	};
};