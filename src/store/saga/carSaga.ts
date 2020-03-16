import * as carActionTypes from '../actionTypes/carActionTypes';
import * as carActions from '../actions/carActions';
import * as likeActionTypes from '../actionTypes/likingActionTypes';
import * as likeActions from '../actions/likingActions';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as carService from '../../services/carService';
import { push } from 'connected-react-router';
import * as routes from '../../routes';

function* fetchCars() {

	try {
		const response = yield call(carService.fetchCars);

		if (response && response.status === 200) {
			yield put(carActions.fetchCarsSuccess(response.data));
		}

	}
	catch (error) {
		console.log(error);
		yield put(carActions.fetchCarsFail());
	}

}

function* addCar(action: carActions.addCar) {

	try {
		const { car } = action;

		const response = yield call(carService.addCar, car);

		if (response && response.status === 200) {
			yield put(carActions.addCarSuccess(response.data));
			yield put(push('/'))
		}
		else {
			yield put(carActions.addCarFail());

		}
	}
	catch (error) {
		console.log(error);
		yield put(carActions.addCarFail());
	}


}

function* deleteCar(action: carActions.deleteCarRequest) {

	try {
		const { id } = action;

		const response = yield call(carService.deleteCar, id);

		if (response && response.status === 200) {
			yield put(carActions.deleteCarSuccess(id));
			if (window.location.pathname !== '/') {
				yield put(push('/'))
			}
		}
	}
	catch (error) {
		console.log(error);
		yield put(carActions.deleteCarFail());
	}

}

function* fetchSingleCar(action: carActions.fetchSingleCar) {
	const { id } = action;

	const response = yield call(carService.fetchSingleCar, id);

	if (response && response.status === 200) {
		yield put(carActions.fetchSingleCarSuccess(response.data))
	}
}

function* likeCar(action: likeActions.likeCar) {
	const { id, likeType } = action;

	const response = yield call(carService.likeCar, likeType ? routes.like : routes.dislike, id);

	if (response && response.status === 200) {
		yield put(likeActions.likeActionSuccess(likeType, id)) //true se koristi za like a false za dislike
	}
}

export function* carSaga() {
	console.log('car saga radi');

	yield takeEvery(carActionTypes.FETCH_CARS, fetchCars);
	yield takeEvery(carActionTypes.ADD_NEW_CAR, addCar);
	yield takeEvery(carActionTypes.DELETE_CAR_REQUEST, deleteCar);
	yield takeEvery(carActionTypes.FETCH_SINGLE_CAR, fetchSingleCar);
	yield takeEvery(likeActionTypes.LIKE_CAR, likeCar);
}