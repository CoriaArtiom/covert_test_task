import { GET_USERS, UPDATE_USERS } from './action';

const defaultState = {
	status: false,
	data: ''
};

export const sideBarReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state, 
				data: action.payload,
				status: true
			};
		
		case UPDATE_USERS:
			return {
				...state, 
				data: action.payload,
			};
		default: {

		}
	}
	return state;
};