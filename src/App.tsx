import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import { Login_Register } from './pages/login_register';
import {AddCar} from './pages/AddCar'
import {HomePage} from './pages/HomePage';
import {Car} from './pages/Car'
import {PageContainer} from './pages/PageContainer';
import { ConnectedRouter } from 'connected-react-router'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {history} from './store/store';
import * as userActions from './store/actions/userActions';

function App() {

   const dispatch = useDispatch();

   useEffect(() => {

       dispatch(userActions.onPageLoad(history.location.pathname));
       
   }, [])


  return (
    <div className="App">
    	<ConnectedRouter  history={history}>
    		<Switch>
    			<Route path='/login'>
    				<Login_Register/>
    			</Route>

    			<Route path='/addCar'>
    				<AddCar/>
    			</Route>

                <Route path='/car/:id' render= { props => <Car {...props}/>}/>
    			
    			<Route path='/'>
    				<HomePage/>
    			</Route>

    		</Switch>
    	</ConnectedRouter>
    </div>
  );
}

export default App;
