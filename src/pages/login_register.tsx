import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField, Button, Dialog, DialogTitle } from '@material-ui/core';
import { User } from '../models/User';
import * as userActions from '../store/actions/userActions';
import { rootState } from '../store/reducers/rootReducer';
import { RegisterDialog } from '../components/RegisterDialog';
import '../App.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const initialCredentials: User = {
    userName: '',
    password: ''
}

export const Login_Register = () => {
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState(initialCredentials);
    const [mode, setMode] = useState(true) // True se koristi kada je u 'login' rezimu a false za registraciju
    const { proccessing, error, errorMessage } = useSelector((state: rootState) => state.user)

    const handleChange = (prop: keyof User) => (event: ChangeEvent<HTMLInputElement>) => {

        setCredentials({ ...credentials, [prop]: event.target.value })
    }

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(credentials);

        mode ? dispatch(userActions.loginRequest(credentials)) : dispatch(userActions.registerUser(credentials));

    }

    return (
        <div className="loginBackground">
            <div className="formContainer">

                <form autoCapitalize="off" autoComplete="off" onSubmit={(e) => submit(e)}>
                    <Grid container
                        justify='center'
                        direction='column'
                        alignItems='center'
                    >
                        <TextField

                            id="standard-basic"
                            label="Username"
                            value={credentials.userName}
                            onChange={handleChange('userName')}
                        />
                        <TextField
                            style={{ marginTop: '20px' }}
                            type="password"
                            id="standard-basic"
                            label="Password"
                            value={credentials.password}
                            onChange={handleChange('password')}
                        />
                        {
                            proccessing ? <CircularProgress style={{ marginTop: '20px' }} color="secondary" /> :
                                <Button style={{ marginTop: '20px' }} type="submit" variant="contained" color="primary">{mode ? 'Login' : 'Register'}</Button>
                        }
                        {
                            error ? <p className="errorMessage">{errorMessage}</p> :
                                null
                        }

                    </Grid>

                </form>
                <div style={{ marginTop: '20px' }}>
                    <span >
                        {mode ? `Don't have an account?: ` : `Already have an account?: `}
                        <Button color="secondary" onClick={() => { setMode(!mode) }}>{mode ? `Register a new account` : `Log in to existing account`}</Button>
                    </span>
                </div>

                <RegisterDialog></RegisterDialog>
            </div>
        </div>
    )
}

