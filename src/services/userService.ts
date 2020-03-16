import * as routes from '../routes';
import axios from 'axios';
import { UserLogin, User } from '../models/User';
import { RefreshToken } from '../models/RefreshToken';

export async function userRegister(user: User) {
    return axios({
        method: 'POST',
        url: routes.register,
        data: user,
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response)
        .catch(error => error);
}

export async function userLogin(credentials: UserLogin | RefreshToken) {
    return axios({
        method: 'POST',
        url: routes.login,
        data: credentials,
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response
        )
        .catch(error => { console.log(error); return error.response })
}