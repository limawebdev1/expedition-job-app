import * as types from './actionTypes';

const initialState = {
	messages: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.PUSH_FLARE_MESSAGE: {
			const { message } = action.payload;
			return {
				...state,
				messages: [...state.messages, message]
			};
		}
		case types.POP_FLARE_MESSAGE:
			return {
				...state,
				messages: [...state.messages.slice(1)]
			};
		case types.CLEAR_FLARE_MESSAGE:
			return {
				...state,
				messages: []
			};
		default:
			return state;
	}
};
