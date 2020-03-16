import { Action } from "redux";
import { Car } from "../../models/Car";
import * as carActionTypes from '../actionTypes/carActionTypes';
import * as carActions from '../actions/carActions';
import * as likeActionTypes from '../actionTypes/likingActionTypes';
import * as likeActions from '../actions/likingActions';
import { CLOSE_MODAL } from '../actionTypes/userActionTypes';

export interface CarState {
    cars: Car[],
    loading: boolean,
    fetchError: boolean,
    addError: boolean,
    selectedCar: Car | null,
    showDeleteModal: boolean,
    selectedId: number
}

const initialState: CarState = {
    cars: [],
    loading: false,
    fetchError: false,
    addError: false,
    selectedCar: null,
    showDeleteModal: false,
    selectedId: -1
}

const carReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case carActionTypes.FETCH_CARS: {

            return {
                ...state,
                loading: true,
                fetchError: false,
            }
        }

        case carActionTypes.FETCH_CARS_SUCCESS: {

            const { cars } = action as carActions.fetchCarsSuccess;

            return {
                ...state,
                loading: false,
                fetchError: false,
                cars
            }
        }

        case carActionTypes.FETCH_CARS_FAIL: {

            return {
                ...state,
                loading: false,
                fetchError: true
            }
        }

        case carActionTypes.ADD_NEW_CAR: {
            return {
                ...state,
                loading: true,
                addError: false
            }
        }

        case carActionTypes.ADD_NEW_CAR_SUCCESS: {
            const { car } = action as carActions.addCarSuccess;

            return {
                ...state,
                loading: false,
                addError: false,
                cars: [...state.cars, car]
            }
        }

        case carActionTypes.ADD_NEW_CAR_FAIL: {

            return {
                ...state,
                loading: false,
                addError: true
            }
        }

        case carActionTypes.DELETE_CAR: {
            const { id } = action as carActions.deleteCar;
            return {
                ...state,
                showDeleteModal: true,
                selectedId: id
            }
        }

        case carActionTypes.DELETE_CAR_SUCCESS: {
            const { id } = action as carActions.deleteCarSuccess;

            return {
                ...state,
                cars: [...state.cars.filter(car => car.id !== id)]
            }
        }

        case carActionTypes.FETCH_SINGLE_CAR_SUCCESS: {
            const { car } = action as carActions.fetchSingleCarSuccess;

            return {
                ...state,
                selectedCar: car
            }
        }

        case likeActionTypes.LIKE_ACTION_SUCCESS: {
            const { incrementor, id } = action as likeActions.likeActionSuccess;

            let selected;
            if (state.selectedCar === null) {
                selected = null
            }
            else {
                selected = { ...state.selectedCar };
                incrementor ? selected.likes!++ : selected.dislikes!++;
            }

            return {
                ...state,
                cars: [...state.cars.map(car => {
                    if (car.id === id) {
                        incrementor ? car.likes!++ : car.dislikes!++
                    }

                    return car;
                })],
                selectedCar: { ...selected }
            }
        }

        case carActionTypes.REDIRECT_FROM_PAGE: {
            return {
                ...state,
                selectedCar: null
            }
        }

        case CLOSE_MODAL: {
            return {
                ...state,
                showDeleteModal: false
            }
        }

        default:
            return state
    }
}

export default carReducer;