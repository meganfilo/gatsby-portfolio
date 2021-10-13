import React from "react";

const Container = (props) => {
    return (
        <div className={`container ${props.isNav ? "nav-container" : ""}`}>{props.children}</div>
    )
}

export default Container;