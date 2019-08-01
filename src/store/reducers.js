import { combineReducers } from 'redux';
import { commentFormReducer } from './infocontainer/commentform/reducers'
import { sideBarReducer } from './sidebar/sidebar/reducers'

export default combineReducers({
	commentForm: commentFormReducer,
	users: sideBarReducer
});