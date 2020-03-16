import React from 'react'
import { useDispatch } from 'react-redux';

import { Car } from '../models/Car';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Button, IconButton } from "@material-ui/core"
import * as carActions from '../store/actions/carActions';
import * as likeActions from '../store/actions/likingActions';
import { DeleteDialog } from '../components/DeleteDialog';


export const UserCarActions = (car: Car) => {

	const dispatch = useDispatch();

	const deleteCar = () => {
		dispatch(carActions.deleteCar(car.id!))
	}

	const likeCar = (type: boolean) => {
		dispatch(likeActions.likeCar(car.id!, type))
	}

	return (
		<div className="cardActionsContainer">
			<div>
				<IconButton onClick={() => likeCar(true)}>
					<ThumbUpIcon />
					{car.likes}
				</IconButton>
				<IconButton onClick={() => likeCar(false)}>
					<ThumbDownIcon />
					{car.dislikes}
				</IconButton>
			</div>

			<Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={deleteCar}>
				Delete
						</Button>
			<DeleteDialog></DeleteDialog>

		</div>
	)
}