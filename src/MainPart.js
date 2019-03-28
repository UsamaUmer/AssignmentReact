import React, { Component } from 'react';
import './MainPart.css'

class MainPart extends Component{
    render(){
        return(
            <div>
                <div id="BodyPart">
                    <div id="Heading">
                        <h1>Creative</h1>
                        <h3>We Create Opportunities</h3>
                    </div>
                </div>
                <div id="BusinessCard">
                    <h3 class="Best">Best Business Consulting</h3><br/>
                    <h6 class="Best">
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a galley of 
                         type and scrambled it to make a type specimen book. It has 
                         survived not only five centuries, but also the leap into 
                         electronic typesetting, remaining essentially unchanged
                    </h6>
                </div>
            </div>
        );
    }
}

export default MainPart;