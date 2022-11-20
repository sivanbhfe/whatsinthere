import React from 'react';
import "./RestaurantCard.css";
import Card from '@mui/material/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { withRouter } from 'react-router-dom';
// import '../../assets/font-awesome-4.7.0/css/font-awesome.min.css';


const RestaurantCard = function(props){
    // const image = props.image;
    const index = props.index;
	const classes = props.classes;	    	

    return (
		<div className="cardContainer" onClick={() => {let detailsPageUrl = '/restaurant/'+ props.resId; return props.history.push(detailsPageUrl)}} key={index}>
		
		<Card style={{width:"95%",height:"95%"}} className={classes.resCard} key={index}>			
				
					<CardContent >
						<Typography gutterBottom variant="h4" component="h2">
							<span>Tent</span>
						</Typography>
						<div><br/>
						<Typography style={{height:"18px",display:"block"}}variant="h6" >
						<span>Tent</span>
						</Typography>
						</div>
						<br /><br />
					</CardContent>		
								
			</Card>
				</div>
    )

}

export default (RestaurantCard);
