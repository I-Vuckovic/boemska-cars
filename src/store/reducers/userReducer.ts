import { Action } from "redux";
import * as userActions from '../actionTypes/userActionTypes';
import {requestFailed} from '../actions/userActions';

export interface UserState {
	proccessing: boolean,
	error: boolean,
	showModal: boolean,
	errorMessage: string
}

const initialState : UserState = {
	proccessing: false,
	error: false,
	showModal: false,
	errorMessage: ''
}

export const userReducer = (state = initialState, action : Action) => {

	switch(action.type) {
		case userActions.LOG_IN_REQUEST : case userActions.REGISTER_REQUEST: {

			return {
				...state,
				proccessing: true,
				error: false
			}
		}

		case userActions.LOG_IN_SUCCESS: {
			return {
				...state,
				proccessing: false,
				error: false,
			}
		}

		// case userActions.LOG_IN_FAILED :  {

		// 	return {
		// 		...state,
		// 		proccessing: false,
		// 		error: true,
		// 		errorMessage: "Could not log in, check if you entered a correct username and password"
		// 	}
		// }

		// case userActions.REGISTER_FAILED: {


		// }

		case userActions.REQUEST_FAILED: {
			const {errorMessage} = action as requestFailed;

			return {
				...state,
				proccessing: false,
				error: true,
				errorMessage
			}
		}

		case userActions.REGISTER_SUCCESS: {

			return {
				...state,
				proccessing: false,
				error: false,
				showModal: true
			}
		}

		case userActions.CLOSE_MODAL: {
			return {
				...state,
				showModal: false
			}
		}

		default: {
			return state
		}
	}

}
