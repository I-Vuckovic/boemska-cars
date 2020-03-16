import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import * as userActions from '../store/actions/userActions';
import { rootState } from '../store/reducers/rootReducer';

export const RegisterDialog = () => {

    const showModal = useSelector((state: rootState) => state.user.showModal);
    const dispatch = useDispatch();

    const closeHandle = () => {
        dispatch(userActions.closeModal());
    }

    return (
        <Dialog onClose={closeHandle} open={showModal}>
            <DialogTitle>Notice</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You have successfully registered a new account
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeHandle} color="primary">Confirm</Button>
            </DialogActions>
        </Dialog>
    )
}