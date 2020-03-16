import { Action } from "redux";
import * as carActions from '../actionTypes/carActionTypes';
import { Car } from "../../models/Car";

export interface fetchCars extends Action {

}

export function fetchCars(): fetchCars {
    return {
        type: carActions.FETCH_CARS
    }
}

export interface fetchCarsSuccess extends Action {
    cars: Car[]
}

export function fetchCarsSuccess(cars: Car[]): fetchCarsSuccess {
    return {
        type: carActions.FETCH_CARS_SUCCESS,
        cars
    }
}

export interface fetchCarsFail extends Action {

}

export function fetchCarsFail(): fetchCarsFail {
    return {
        type: carActions.FETCH_CARS_FAIL
    }
}

export interface fetchSingleCar extends Action {
    id: number
}

export function fetchSingleCar(id:number) : fetchSingleCar {
    return {
        type: carActions.FETCH_SINGLE_CAR,
        id
    }
}

export interface fetchSingleCarSuccess extends Action {
    car : Car
}

export function fetchSingleCarSuccess(car : Car) : fetchSingleCarSuccess {
    return {
        type: carActions.FETCH_SINGLE_CAR_SUCCESS,
        car
    }
}

export interface fetchSingleCarFail extends Action {

}

export function fetchSingleCarFail() : fetchCarsFail {
    return {
        type: carActions.FETCH_SINGLE_CAR_FAIL
    }
}

export interface addCar extends Action {
    car: Car
}

export function addCar(car : Car) : addCar {
    return{
        type: carActions.ADD_NEW_CAR,
        car
    }
}

export interface addCarSuccess extends Action {
    car: Car
}

export function addCarSuccess(car : Car) : addCarSuccess {
    return {
        type: carActions.ADD_NEW_CAR_SUCCESS,
        car
    }
}

export interface addCarFail extends Action {

}

export function addCarFail() : addCarFail {
    return {
        type: carActions.ADD_NEW_CAR_FAIL
    }
}

export interface deleteCar extends Action {
    id: number
}

export function deleteCar(id: number) : deleteCar {
    return {
        type:carActions.DELETE_CAR,
        id
    }
}

export interface deleteCarRequest extends Action {
    id: number
}

export function deleteCarRequest(id:number) : deleteCarRequest {
    return {
        type:carActions.DELETE_CAR_REQUEST,
        id
    }
}

export interface deleteCarSuccess extends Action {
    id :number
}

export function deleteCarSuccess(id : number): deleteCarSuccess {
    return {
        type: carActions.DELETE_CAR_SUCCESS,
        id
    }
}

export interface deleteCarFail extends Action {

}

export function deleteCarFail() : deleteCarFail {
    return {
        type: carActions.DELETE_CAR_FAIL
    }
}

//Bez interfejsa jer se koristi samo na jednom mestu
export function redirectFromPage() {
    return {
        type: carActions.REDIRECT_FROM_PAGE
    }
}