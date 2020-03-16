import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Toolbar, Typography, Button, Container } from '@material-ui/core';

export const Footer = () => {
    return (
    	<div style={{marginTop: '20px'}}>
    		<AppBar position="static">
    			<div className="footer">
	            	<Toolbar>
	            	
	                	 <CopyrightIcon/> Boemska
	            	
	            	</Toolbar>
	            </div>
	        </AppBar>
    	</div>
        
    )
} 
