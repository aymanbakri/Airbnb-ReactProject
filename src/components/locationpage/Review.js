import React, { Component } from 'react';
import Rating from '../home/Rating';

export default class Review extends Component {
    constructor(props) {
        super(props)
    }
    image() {
        let { authorpic, author } = this.props;

        if (authorpic) {
            return <img src={this.props.authorpic} className="AuthorImage" />
        }
        else {
            return author[0]
        }
    }
    render() {

        return (
            <div className="Review">
                {
                    <div className="AuthorImage"> {this.image()} </div>
                }
                <div className="author">
                    <h3 className="ReviewAuthor">{this.props.author}</h3>
                    <Rating rating={this.props.rating} /><br />
                </div>
                <div>{this.props.caption}</div>
                <div>{this.props.description}</div>
            </div>
        )
    }

}

Review.defaultProps = {
    author: "",
    caption: ""
}