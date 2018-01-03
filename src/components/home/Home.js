import React, { Component } from 'react';
import Jumbotron from './Jumbotron'
import Locations from './Locations'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { filter: "", guestsFilter: "" };
        this.updateSearchFilter = this.updateSearchFilter.bind(this)
        this.updateGuestsFilter = this.updateGuestsFilter.bind(this)
    }
    updateSearchFilter(event) {
        this.setState({ filter: event.target.value });
    }
    updateGuestsFilter(event) {
        this.setState({ guestsFilter: event.target.value });
    }
    
    render() {
        return (
                <div>
                    <Jumbotron updateSearchFilter={this.updateSearchFilter} updateGuestsFilter={this.updateGuestsFilter} />
                     <div className="container">
                        <Locations nameFilter={this.state.filter} guestsFilter={this.state.guestsFilter} />
                    </div>
                </div>
        )
    }

}