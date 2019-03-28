import React, { Component } from 'react';
import './Navigation.css'

                                /*<ul id="AboutUs">
                                    <li>Contact Us</li>
                                    <li>Address</li>
                                </ul>*/

class Navigation extends Component{
    render(){
        return(
            <div>
                <div id="Navigationn">
                    <div id="logo">Logo</div>
                    <div id="Lists">
                        <ul>
                            <li>Contact</li>
                            <li>Pricing</li>
                            <li>Portfolio</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li><strong>Home</strong></li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;