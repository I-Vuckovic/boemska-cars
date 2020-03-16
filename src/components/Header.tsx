import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import './Components.css';
import { Toolbar, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

export const Header = () => {

    const logout = () => {
        localStorage.clear();
        window.location.replace('./login');
        //Ovde koristim window.local.replace da bi se prilikom logoutovanja refreshovala stranica i time obrisao store
    }
    return (
        <AppBar position="static">
            <Toolbar>

                <div className="container">
                    <Link to="/" className="linkStyle">Boemska-cars</Link>
                    <div className="rightContainer">
                        <Link to="/addCar" className="linkStyle">Add new Car</Link>
                        <div className="linkStyle" onClick={logout}>Logout</div>
                    </div>
                </div>

            </Toolbar>
        </AppBar>
    )
}