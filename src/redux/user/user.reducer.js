import {UserActionTypes} from './user.types.js';

const INITIAL_STATE = {
	currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	/*if(action.type === UserActionTypes.SET_CURRENT_USER){

	}*/
	switch(action.type){
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			}
		default:
			return state;
	}
};

export default userReducer;