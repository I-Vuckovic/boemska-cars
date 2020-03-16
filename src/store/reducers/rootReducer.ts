import { combineReducers } from "redux";
import { userReducer, UserState } from './userReducer';
import { connectRouter } from 'connected-react-router';
import carReducer, {CarState} from "./carReducer";

export interface rootState {
	user: UserState,
	cars: CarState
}

export const rootReducer = (history: any) => combineReducers({
	user: userReducer,
	cars: carReducer,
	router: connectRouter(history)
});