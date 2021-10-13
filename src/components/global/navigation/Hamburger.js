import React from "react";
import HamburgerImg from "../../../images/hamburger.svg";

const Hamburger = (props) => {
    return (
        <button 
            aria-label="Open navigation menu" 
            className="hamburger__button" 
            onClick={props.click}
        >
            <img src={HamburgerImg} alt=""/>
        </button>
    )
}

export default Hamburger;