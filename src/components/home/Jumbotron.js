import React, { Component } from 'react';
import Search from './Search'
export default class Jumbotron extends Component {
    
    render() {
        return (
            <div className="jumbotron">
                    <h1 className="socrata">Socrata</h1> 
                    <div className="textTitle">Book unique homes and experience a city like a local.</div>    
                     <Search updateSearchFilter={this.props.updateSearchFilter} updateGuestsFilter={this.props.updateGuestsFilter}/>
            </div>
        )
    }
    
}