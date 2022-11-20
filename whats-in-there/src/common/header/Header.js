import React, { Component } from "react";
import "./Header.css";





class Header extends Component {
  constructor() {
    super();
    
  }


  componentDidMount() {
  }


  render() {
    const { classes } = this.props;
    let logoToRender = null;
   

    return (
      <div className="topMain">
        <div className="header-main-container">
          <div className="header-logo-container">{logoToRender}</div>
      <span class="sitename">What's in there???</span>
        </div>
       
        
      </div>
    );
  }
}
export default (Header);
