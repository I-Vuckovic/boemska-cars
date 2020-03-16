import React, { useState } from 'react'
import '../App.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CarCard } from '../components/CarCard';
import { Button, Grid } from '@material-ui/core';
import { Car } from '../models/Car';
import { useDispatch, useSelector } from 'react-redux';
import * as carActions from '../store/actions/carActions';
import { rootState } from '../store/reducers/rootReducer';
import CircularProgress from '@material-ui/core/CircularProgress';

export const HomePage = () => {

  const dispatch = useDispatch();

  const { loading, fetchError, cars } = useSelector((state: rootState) => state.cars)

  const fetchCars = () => {

    dispatch(carActions.fetchCars());
  }

  return (
    <div className="page-container">

      <Header />
      <main>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
        >

          <div style={{ marginTop: '20px' }}>
            <Button variant='contained' color='primary' onClick={fetchCars}>Get all cars</Button>
          </div>

          <div >
            {loading ? <CircularProgress style={{ marginTop: '20px' }} color="secondary" /> : null}
            {cars.map(car => {
              return (<CarCard key={car.id} {...car} />)
            })}
            {fetchError ? <h3 style={{ color: 'red' }}>Attention: Could not fetch cars from the server</h3> : null}
          </div>

        </Grid>

      </main>
      <Footer />

    </div>
  )
}
