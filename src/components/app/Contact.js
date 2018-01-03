import React, { Component } from 'react';

export default class Contact extends Component {

    render() {
        return (
            <div className="Contact"><h1>Contact </h1>
                  <h1>CONTACT US</h1>
                      <div className="flex">
                            <div className="address">
                                <p>Lorem ipsum </p>
                                <p>Lorem ips</p>
                                <p>Zip Code 1111</p>
                            </div>
                            <div className="telephone">
                                <p>+972888888</p>
                                <p>+872999999</p>
                            </div>
                            <div className="imglogo"><img className="logo" src="/static/icons/location.jpg" alt=""/></div>
                     </div>
                     <div className="details">
                            <input type="text" id="fname" placeholder="First name" name="fname"/>
                            <input type="text" id="lname" placeholder="Last name" name="lname"/>
                            <input type="text" id="email" placeholder="Email" name="email"/>
                            <input type="text" id="tel" placeholder="Telephone"name="tel" />
                            <input type="text" id="msg" placeholder="Message:"name="msg" />
                     </div>
                     <button className="button">Send Message</button>
            </div>
        )
    }

}