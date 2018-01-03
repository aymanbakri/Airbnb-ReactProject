import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
export default class Header extends Component{

    render(){
        return(
         <div className="header">
            <ul className="headerUl">
               <img className="logo" src="/static/icons/planeLogo.jpg"/>
               <li><Link to="/About"><a>About</a></Link></li>  
               <li><Link to="/Contact"><a>Contact</a></Link></li>
               <li><Link to="/"><a>Home</a></Link></li> 
            </ul>            
        </div>                                       
        );
    }
}