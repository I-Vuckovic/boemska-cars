import { Action } from "redux";
import { User } from "../../models/User";
import * as userActions from '../actionTypes/userActionTypes';

export interface loginRequest extends Action {
	credentials: User
}

export function loginRequest(credentials: User): loginRequest {
	return {
		type: userActions.LOG_IN_REQUEST,
		credentials
	}
}

export interface loginRequestSuccess extends Action {

}

export function loginRequestSuccess(): loginRequestSuccess {
	return {
		type: userActions.LOG_IN_SUCCESS,

	}
}

export interface requestFailed extends Action {
	errorMessage: string
}

export function requestFailed(errorMessage: string) : requestFailed {
	return{
		type: userActions.REQUEST_FAILED,
		errorMessage
	}
}

// export interface loginRequestFailed extends Action {

// }

// export function loginRequestFailed(): loginRequestFailed {
// 	return {
// 		type: userActions.LOG_IN_FAILED
// 	}
// }

export interface onPageLoad extends Action {
	path: string
}

export function onPageLoad(path :string) : onPageLoad {
	return{
		type: userActions.ON_PAGE_LOAD,
		path
	}
}

export interface registerUser extends Action {
	user: User
}

export function registerUser(user : User) : registerUser {
	return{
		type: userActions.REGISTER_REQUEST,
		user
	}
}

export function registerUserSuccess() {
	return {
		type: userActions.REGISTER_SUCCESS
	}
}

// export function registerUserFail(){
// 	return{
// 		type: userActions.REGISTER_FAILED
// 	}
// }

export function closeModal() {
	return {
		type: userActions.CLOSE_MODAL
	}
}
