import * as routes from '../routes';
import axios, { AxiosResponse } from 'axios';
import { Car } from '../models/Car';
import { RefreshToken } from '../models/RefreshToken';
import { userLogin } from './userService';

const headerWithToken = () => {

	const headers = {
		'Content-type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('access_token')}`
	}
	return headers;

}

async function checkAuth(error: any) {

	if (error.response.status === 401) {

		const refreshToken: RefreshToken = {
			client_id: 'test',
			client_secret: 'secret',
			grant_type: 'refresh_token',
			refresh_token: `${localStorage.getItem('refresh_token')}`
		}

		const response: AxiosResponse = await userLogin(refreshToken);

		if (response.status === 200) {
			localStorage.setItem('access_token', response.data.access_token);
			localStorage.setItem('refresh_token', response.data.refresh_token);

			return true;
		}

		console.log(response);

	}

	return false;
}

export async function fetchCars() {

	try {
		const response = await axios.get(routes.cars, { headers: headerWithToken() });
		return response;
	}
	catch (error) {
		console.log(error)

		const auth = await checkAuth(error);

		if (auth) {
			const resposne = await axios.get(routes.cars, { headers: headerWithToken() });
			return resposne;
		}

		return error
	}

	//Prvobitno resenje sa promise-ima, nisam mogo da osmislim mehanizam za refresh token pa sam preso
	//na async/await

	// return axios.get(routes.cars, {
	//     headers: headerWithToken()
	// })
	//     .then(response => response)
	//     .catch(error => {
	//     	console.log(error); 

	//     	return errorHandler(error);
	//     }
	//     )
	//     .then(response => {console.log(response); return null})
}

export async function addCarRequest(car: Car) {
	return axios({
		method: 'POST',
		headers: headerWithToken(),
		url: routes.cars,
		data: car
	})
}

export async function addCar(car: Car) {
	try {
		return await addCarRequest(car);
	}
	catch (error) {

		const auth = await checkAuth(error);

		if (auth) {
			return await addCarRequest(car);
		}

		return error
	}
}

export async function deleteCarRequest(id: number) {
	return axios({
		method: 'DELETE',
		headers: headerWithToken(),
		url: `${routes.cars}${id}`,
	})
}

export async function deleteCar(id: number) {
	try {
		return await deleteCarRequest(id);
	}
	catch (error) {

		const auth = await checkAuth(error);

		if (auth) {
			return await deleteCarRequest(id);
		}

		return error
	}
}

export async function fetchSingleCar(id: number) {

	try {
		const response = await axios.get(`${routes.cars}${id}`, { headers: headerWithToken() })
		return response;
	}
	catch (error) {

		const auth = await checkAuth(error);

		if (auth) {
			const resposne = await axios.get(`${routes.cars}${id}`, { headers: headerWithToken() })
			return resposne;
		}

		return error
	}
}

export async function likeCarRequest(route: string, id: number) {
	return axios({
		method: "POST",
		headers: headerWithToken(),
		url: `${route}${id}`
	})
}

export async function likeCar(route: string, id: number) {
	try {
		return await likeCarRequest(route, id);
	}
	catch (error) {

		const auth = await checkAuth(error);

		if (auth) {
			return await likeCarRequest(route, id);
		}

		return error
	}
}