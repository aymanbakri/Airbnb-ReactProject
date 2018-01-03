import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Rating from './Rating'


export default class Location extends Component {


    render() {
       var rating = 0;
       for (let i of this.props.reviews) {
           rating += i.rating;
       }
       rating = rating / this.props.reviews.length;
        return (
            <div className="imageHolder">
                <Link to={"/Location/" + this.props.id}>
                    <img src={this.props.imageUrl} alt="" className="galleryImage " />
                </Link>
                <div className="imageDesc">
                    <div className="locationName"> {this.props.name}</div>
                    <div className="locationPrice"> {this.props.price} $</div>
                    <div className="locationCity"> {this.props.city}  </div>
                    <div className="reviews">{this.props.reviews.length + "Reviews"}</div>
                    <div className="rating" ><Rating rating={rating} /></div>
                </div>
            </div>
        )
    }

}