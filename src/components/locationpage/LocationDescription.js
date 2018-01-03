import React, { Component } from 'react';
export default class LocationDescription extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="LocationDescription" >
                <h3 className="aboutDesc">About this listing</h3>
                <div className="aboutDescription">
                    {this.props.locationObject.description}
                </div>
            </div>
        )
    }

}