import React from "react";
import socialImages from "../../../content/global/data/images";

const Project = (props) => {
    return (
        <section className="project">
            <div className="project-info">
                <h3>{props.title}</h3>
                <ul>
                    <li>React</li>
                    <li>SCSS</li>
                    <li>Weather API</li>
                </ul>
                <p>{
                    props.description ? props.description 
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit..'
                    }</p>
                <div className="links">
                    <a href={props.githubLink} title="Github link" target="_blank">
                        <img src={socialImages.githubIcon} alt="" />
                    </a>
                    <a href={props.siteLink} title="Link to {props.title}" target="_blank">
                        <img src={socialImages.linkIcon} alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Project;