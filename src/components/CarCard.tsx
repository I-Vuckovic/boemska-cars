import React from 'react';
import {useDispatch} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Button, CardActionArea , CardActions, CardContent, CardMedia, IconButton, Icon} from "@material-ui/core"
import './Components.css';
import {Car} from '../models/Car';
import { useHistory } from 'react-router-dom';
import {UserCarActions} from './UserCarActions';
import { Link } from "react-router-dom";

const useStyles = makeStyles( {
	root: {
		minWidth: 370
	},
	media: {
		height: 250
	},
});

export const CarCard = (car : Car) => {
	const classes = useStyles();

	const dispatch = useDispatch();

	return (
		<div style={{marginTop: '20px'}}>
			<Card className={classes.root}>
				<Link to={`/car/${car.id!}`} style={{ textDecoration: 'none', color: 'black' }}>

					<CardActionArea>
						<CardMedia 
							className={classes.media}
							image={car.image} title="image"/>
						<CardContent>
							<h2>{car.name}</h2>
						</CardContent>
					</CardActionArea>
				</Link>
				
				<CardActions>
					<UserCarActions key={car.id!} {...car}/>
					
				</CardActions>
			</Card>
		</div>
	)
}
