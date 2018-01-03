import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    }

    render() {
        return (
            <div className="searchBar">          
                    <input type="search" className="searchInput"placeholder="City Name" onChange={(e) => this.props.updateSearchFilter(e)} />
                    <input type="number" min="0" className="guestInput"placeholder="Number Of Guests" onChange={(e) => this.props.updateGuestsFilter(e)} />
            </div>
        )
    }

}