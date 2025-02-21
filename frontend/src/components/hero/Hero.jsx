import React from "react";
import "./Hero.css"
import map from "../../images/map.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Hero(){
    return(
        <div className="hero-container">
            <div className="hero-main">
                <div className="left">
                    <h1>Find & Mark Public Utilities Near You</h1>
                    <p>"Easily locate restrooms, dustbins, and other essential public utilities in your city."</p>

                    <div className="btns">
                        <button className="blue">Find Utilites</button>
                        <button className="green"> Add a Utility</button>
                    </div>
                </div>

                <div className="right">
                    <img src={map} alt="" />
                </div>

            </div>
            <div className="see-more">
                <div className="line">
                    <hr />  
                </div>
                <div className="cen">
                    <p>See more</p>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </div>
                <div className="line">
                    <hr />  
                </div>
            </div>
        </div>
    )
}