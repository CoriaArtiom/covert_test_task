import { COMMENTFORM_CHANGE_TITLE, COMMENTFORM_CHANGE_TEXT, COMMENTFORM_CHANGE_PHONE, SET_TITLE_ERROR, SET_TEXT_ERROR, SET_PHONE_ERROR } from './actions';

const defaultState = {
	title: '',
	text: '',
	phone: '',
	titleError: '',
	textError: '',
	phoneError: ''
};

export const commentFormReducer = (state = defaultState, action) => {
	switch (action.type) {
		case COMMENTFORM_CHANGE_TITLE:
			return {
				...state, 
				title: action.payload
			};
		case COMMENTFORM_CHANGE_TEXT:
			return {
				...state, 
				text: action.payload
			};	
		case COMMENTFORM_CHANGE_PHONE:
			return {
				...state, 
				phone: action.payload
			};	
		case SET_TITLE_ERROR:
			return {
				...state, 
				titleError: action.payload
			};	
		case SET_TEXT_ERROR:
			return {
				...state, 
				textError: action.payload
			};
		case SET_PHONE_ERROR:
			return {
				...state, 
				phoneError: action.payload
			};	
		default: {

		}					
	}
	return state;
};