import React, { Component } from 'react';
import RestaurantCard from '../home/RestaurantCard';
import './Home.css';


const styles = {
    resCard: { width: "90%", cursor: "pointer" }
};

class Home extends Component {

    constructor() {
        super();
        this.state = {
            imageData: [],
            data: []
        }
    }

    componentDidMount() {
       
    }

    // Get all restuarants data
   

    render() {
        const { classes } = this.props;
        return (
            <div>
              
                <div className="mainContainer">
                     
                    <div ><RestaurantCard/> </div>                    
                                                                  
                    
                </div>

            </div>
        )
    }
}

export default (Home);