import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {UserCarActions} from '../components/UserCarActions';
import '../App.css';
import * as carActions from '../store/actions/carActions';
import {rootState} from '../store/reducers/rootReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
import {   Grid } from '@material-ui/core';


export const Car = (props: any) => {
	console.log(props)

	const {selectedCar} = useSelector((state : rootState) => state.cars);

	const dispatch = useDispatch();

	useEffect(() => {

		dispatch(carActions.fetchSingleCar(parseInt(props.match.params.id)))

		return function redirect() {
			dispatch(carActions.redirectFromPage());
		}

	}, [])


	return (
		<div className="page-container">
      
        <Header/>
        <main>

        	<Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          	>
					{
						selectedCar === null? <CircularProgress color="secondary" /> :

						<div className='singleCar'>
							<h1>{selectedCar.name}</h1>
							<img src={selectedCar.image} style={{objectFit:'cover'}} alt="car"/>
							<p className="carDescription">{selectedCar.description}</p>
							<UserCarActions {...selectedCar}/>
						</div>
					}

			</Grid>
		</main>
        <Footer/>

      	</div>
	)
}