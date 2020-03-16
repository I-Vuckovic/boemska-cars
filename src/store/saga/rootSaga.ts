import * as userService from '../../services/userService';
import { UserLogin } from '../../models/User';
import { call, fork } from 'redux-saga/effects';
import { userSaga } from './userSaga';
import { carSaga } from './carSaga';

export function* rootSaga() {
    console.log('saga radi');

    yield fork(userSaga);
    yield fork(carSaga);

    // const credentials: UserLogin = {
    //     client_id: 'test',
    //     client_secret: 'secret',
    //     grant_type: 'password',
    //     password: 'string',
    //     username: 'string'
    // }

    // yield call(userService.userLogin, credentials);
}