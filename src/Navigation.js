import React, { Component } from 'react';
import './Navigation.css';

                                /*<ul id="AboutUs">
                                    <li>Contact Us</li>
                                    <li>Address</li>
                                </ul>*/

class Navigation extends Component{
    render(){
        return(
            <div>
                <div class="toggle"></div>
                <div class="overlay"></div>
                <div id="Navigationn">
                    <div id="logo"><a href="#">Logo</a></div>
                    <div id="Lists">
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#"><strong>Home</strong></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;