import React,{Component} from 'react'
import JsonData from '../../static/data/Location.json'
import Location from './Location'

export default class Locations extends Component{
    constructor(props) {
        super(props)
        this.state = {};
    }
    render(){
        var gallery = JsonData.filter((product)=>{ 
                    if (this.props.nameFilter) {
                        if (this.props.guestsFilter) {
                             return (product.city.name.toLowerCase()==this.props.nameFilter && product.maxGuests >= this.props.guestsFilter)
                        }
                        else {
                            return (product.city.name.toLowerCase()==this.props.nameFilter)
                        }
                        }
                        else if (this.props.guestsFilter){
                            return product.maxGuests >= this.props.guestsFilter;
                        }
                        else {
                            return product;
                        }
        });
        return(
            <div className="galleryContainer">
            {  
                  gallery.map((product, i) =>                        
                        <Location key={i}
                        id={product.id}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        reviews={product.reviews}
                        city={product.city.name}
                        price={product.price}
                        />)
            }
            </div>
        )
    }

}