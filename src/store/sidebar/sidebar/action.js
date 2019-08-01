import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const UPDATE_USERS = 'UPDATE_USERS';

export function getUsers() {
	const request = axios.get('https://my-json-server.typicode.com/coriaartiom/jsonfakedb/users')

	return (dispatch) => {
		request.then(({data}) => {
			dispatch({
				type: GET_USERS,
				payload: data
			});
		});
	};
}

export const updateUsers = data => ({
	type: UPDATE_USERS,
	payload: data
});