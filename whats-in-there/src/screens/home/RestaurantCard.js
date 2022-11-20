import React from 'react';
import "./RestaurantCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const RestaurantCard = function(props){
    // const image = props.image;
    const index = props.index;
	const classes = props.classes;	    	

    return (
		<div >
		
	<Card>
		<CardContent>
			<Typography>TESTING</Typography>
			</CardContent>
			</Card>
				</div>
    )

}

export default (RestaurantCard);
