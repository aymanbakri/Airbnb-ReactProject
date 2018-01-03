import React, { Component } from 'react';
export default class Rating extends Component {

    render() {
        var rating = this.props.rating;
        var starsArray= new Array(5);
        return (
            <div className="Rating">
                {
                    starsArray.fill("").map(function (item, i) {
                        if (i + 1 <= rating)
                            return <i className="fa fa-star" aria-hidden="true"></i>
                        else if (rating - i >= 0.5) {
                            return <i className="fa fa-star-half" aria-hidden="true"></i>
                        }           
                    })
                }
            </div>
        )
    }

}