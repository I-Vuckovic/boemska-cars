import React from 'react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomePage} from './HomePage';  
import {AddCar} from './AddCar'; 

export const PageContainer = (props : any) => {
  //Ovo je trebao da bude container sa header-om i footerom koji bi imao svoj router ali nije lepo funkcionisalo zajedno
  //sa login stranicom
  return (
      <div className="page-container">
      <Router> 
        <Header/>
        <main>
          
          {props.childern}
        </main>
        <Footer/>
        </Router>
      </div>
    )

}
