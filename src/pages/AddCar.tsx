import React, { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TextField, Button, Grid, Input } from '@material-ui/core';
import { Car } from '../models/Car';
import * as carActions from '../store/actions/carActions';
import { rootState } from '../store/reducers/rootReducer';
import CircularProgress from '@material-ui/core/CircularProgress';

const initialState: Car = {
	name: '',
	description: '',
	image: ''
}

export const AddCar = () => {

	const dispatch = useDispatch();

	const [car, setCar] = useState(initialState);
	const [nameValidation, setNameValidation] = useState(true);

	const { loading, addError } = useSelector((state: rootState) => state.cars)

	//Ovo sam koristio da prebacim u base64 sliku i posaljem serveru ali mi je server davao error
	//pa mi je reko mihajlo da radim sa url-om za sad
	const imageAdded = (selectedFile: FileList) => {
		console.log(selectedFile[0]);

		let reader = new FileReader();
		reader.readAsDataURL(selectedFile[0]);

		reader.onload = () => {
			setCar({ ...car, image: reader.result!.toString() })
		}

		reader.onerror = (error) => {
			console.log(error)
		}
	}

	const handleChange = (prop: keyof Car) => (event: ChangeEvent<HTMLInputElement>) => {
		setCar({ ...car, [prop]: event.target.value })
	}

	const submit = () => {
		console.log(car);

		if (car.name === '') {
			setNameValidation(false);
			return;
		}

		dispatch(carActions.addCar(car));
	}

	return (
		<div className="page-container">

			<Header />
			<main>


				<Grid
					container
					direction='column'
					justify='space-between'
					alignItems='center'
					className="addCarContainer"
				>

					<Input placeholder="Name*"
						required
						error={(!nameValidation && (car.name === '')) ? true : false}
						value={car.name}
						onChange={handleChange('name')}

					/>
					{(!nameValidation && (car.name === '')) ? <p style={{ color: 'red', height: '5px', marginTop: '5px' }}> A name is required</p> : null}
					<Input placeholder="description" multiline value={car.description} onChange={handleChange('description')} />

					{/*Koristilo se za base64 slike*/}
					{/*<input 
	          	accept="image/*"
	          	style={{display: 'none'}}
	          	type='file'
	          	id='image'
	          	onChange={ e => imageAdded(e.target.files!)}
	           />
	          <label htmlFor="image">
		        <Button variant="contained" color="default" component="span">
		          Upload picture
		        </Button>
	          </label>*/}

					<Input placeholder="Image URL" value={car.image} onChange={handleChange('image')} />

					{loading ? <CircularProgress color="secondary" /> : <Button variant="contained" color="primary" onClick={submit}>add new car</Button>}
					{addError ? <h3 style={{ color: 'red' }}>Attention: Could not add new car to the server</h3> : null}

				</Grid>

			</main>
			<Footer />

		</div>
	)
}
