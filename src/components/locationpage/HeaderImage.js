import React, { Component } from 'react';
export default class HeaderImage extends Component {
   constructor(props){
       super(props)
   }

   render() {
       return (
           <div className="HeaderImage">
               <img src={this.props.Image} alt="" className="PageImage" />
            </div>
       )
   }

}