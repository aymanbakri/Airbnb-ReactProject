import React, { Component } from 'react';
import Rating from '../home/Rating'
export default class Summary extends Component {
    constructor(props) {
        super(props)
    }
    render() {
       var rating = 0;
       for (let i of this.props.locationObject.reviews) {
           rating += i.rating;
       }
       rating = rating / this.props.locationObject.reviews.length;

        return (
            <div className="locationContainer">
                <div className="LocationNav">
                    <ul className="locationUl">
                        <li><a href="#Overview">Overview</a></li>
                        <li><a href="#Location">Location</a></li>
                        <li><a href="#Reviews">Reviews</a></li>
                    </ul>
                </div>
                <div className="locationPageInfo" id="Overview">
                    <h1 className="locationPageName">{this.props.locationObject.name}</h1>
                    <div className="locationLink">
                        <a className="nameLink" href="#Location">{this.props.locationObject.city.name + " , " + this.props.locationObject.country.name} </a>
                        <a className="ratingLink" href="#Reviews"><Rating rating={rating} /></a>
                        <a className="reviewsLink" href="#Reviews">{this.props.locationObject.reviews.length+ "reviews"}</a>

                    </div>
                </div>
            </div>
        )
    }
}