import { Action } from "redux";
import * as likingActions from '../actionTypes/likingActionTypes';

export interface likeCar extends Action {
	id : number,
	likeType: boolean

}

export function likeCar(id : number, likeType: boolean) : likeCar {
	return {
		type: likingActions.LIKE_CAR,
		id,
		likeType
	}
}

export interface dislikeCar extends Action {
	id : number,
}

export function dislikeCar(id: number, likeType: boolean) : dislikeCar {
	return {
		type: likingActions.DISLIKE_CAR,
		id,
	}
} 

export interface likeActionSuccess extends Action {
	//Koristim boolean za inkrementor da razlikujem like i dislike, true za like, false za dislike
	incrementor : boolean,
	id: number
}

export function likeActionSuccess(incrementor :boolean, id : number) : likeActionSuccess {
	return {
		type: likingActions.LIKE_ACTION_SUCCESS,
		incrementor,
		id
	}
}

export interface likeActionFail extends Action {

}

export function likeActionFail() : likeActionFail {
	return {
		type: likingActions.LIKE_ACTION_FAIL
	}
}