import React from 'react'
import {  Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {rootState} from '../store/reducers/rootReducer';
import * as userActions from '../store/actions/userActions';
import * as carActions from '../store/actions/carActions';

export const DeleteDialog = () => {

	const dispatch = useDispatch();

	const {showDeleteModal, selectedId} = useSelector((state:rootState) => state.cars);

	 const closeHandle =  () => {
        dispatch(userActions.closeModal());
    }

    const sendForDeletion = () => {
        dispatch(carActions.deleteCarRequest(selectedId));
        dispatch(userActions.closeModal());
    }

	return (
		 <Dialog onClose={closeHandle} open={showDeleteModal}>
            <DialogTitle>Notice</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this car?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeHandle} color="primary">No</Button>
                <Button onClick={sendForDeletion} color="primary">Yes</Button>
            </DialogActions>
        </Dialog>
	)
}