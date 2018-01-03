import React, { Component } from 'react';
import HeaderImage from './HeaderImage';
import Summary from './Summary';
import LocationFeatures from './LocationFeatures';
import LocationDescription from './LocationDescription';
import GoogleMap from './GoogleMap'
import Reviews from './Reviews'
import Booking from './Booking'
export default class LocationPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locationObject: {
                city: {},
                country: {},
                reviews: [{}]
            }
        }
    }
    componentWillMount() {
        fetch('/static/data/Location.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('error');
            })
            .then(data => {
                var object;
                object = data.filter((item) => {
                    return item.id == this.props.match.params.id;
                })
                this.setState({ locationObject: object[0] });
            })
    }
    render() {
        let{lng,lat}=this.state.locationObject.city;
        return (
            <div className="locationPage">
                <HeaderImage Image={this.state.locationObject.imageUrl}/>
                <Booking locationObject={this.state.locationObject}/>
                <Summary locationObject={this.state.locationObject}/>
                <LocationFeatures locationObject={this.state.locationObject}/>
                <LocationDescription locationObject={this.state.locationObject}/>
                <GoogleMap lng={lng} lat={lat}/>
                <Reviews reviews={this.state.locationObject.reviews}/>           
            </div>
        )
    }


}

