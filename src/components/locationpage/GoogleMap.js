import React, { Component } from 'react';

export default class GoogleMap extends Component {
   constructor(props){
       super(props)
   }
   shouldComponentUpdate(){
       return false;
   }
   
   componentWillReceiveProps(nextProps){        
       this.map.setCenter({lat:nextProps.lat,lng:nextProps.lng})
   }
   componentDidMount(){
       let {lng, lat} =this.props;
       this.map=new google.maps.Map(this.refs.map,{
           center:{lat,lng},
           zoom:9
       })
   }  

   render() {
       const mapStyle = {
           width: 650,
           height: 400,
           border: '1px solid black'
       };
       return (
           <div id="Location" className="LocationMap">
               <h2 className="LocationMapTitle">Location</h2>
               <div ref="map" className="GoogleMap" style={mapStyle}></div>
           </div>
       )
   }

}

GoogleMap.defaultProps = {
   lat: 0,
   lng: 0
}