import {Action} from 'redux'
import * as userActions from '../actions/userActions';
import {takeEvery, call, put} from 'redux-saga/effects'
import * as userActionTypes from '../actionTypes/userActionTypes';
import {UserLogin} from '../../models/User';
import * as userService from '../../services/userService';
import {push} from 'connected-react-router';

function *onPageLoad(action : userActions.onPageLoad){
	const {path} = action;

	if (path !== '/login' && localStorage.getItem('access_token') === null){
		yield put(push('/login'))
	}
}

function *login(action : userActions.loginRequest) {
	const {credentials} = action;

	console.log(credentials);

	const userLogin : UserLogin = {
		client_id: 'test',
		client_secret: 'secret',
		grant_type: 'password',
		password: credentials.password,
		username: credentials.userName
	}

	const response = yield call(userService.userLogin, userLogin);

	console.log(response);

	if (response && response.status === 200) {
		localStorage.setItem('access_token', response.data.access_token);
		localStorage.setItem('refresh_token', response.data.refresh_token);

		yield put(userActions.loginRequestSuccess());
		yield put(push('/'))
	}
	else {
		yield put(userActions.requestFailed("Could not log in, check if you enterted a corrent username and password"));
	}
}

function *registerUser(action : userActions.registerUser) {

	try {
			const {user} = action;

			const response = yield call(userService.userRegister, user);

			console.log(response);

			if (response && response.status === 200) {

				yield put(userActions.registerUserSuccess());
			}
			else {
				yield put(userActions.requestFailed("Could not register a new account, either the username is taken or the server is down"));
			}
	}
	catch(error){
		console.log(error);
	}

}

export function *userSaga(){
	console.log('user saga radi');

	yield takeEvery(userActionTypes.ON_PAGE_LOAD, onPageLoad);
	yield takeEvery(userActionTypes.LOG_IN_REQUEST, login);
	yield takeEvery(userActionTypes.REGISTER_REQUEST, registerUser)
}