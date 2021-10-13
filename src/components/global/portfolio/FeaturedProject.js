import React from "react";
import socialImages from "../../../../content/global/data/images";

const FeaturedProject = (props) => {
    return (
        <section className="featured-project">
            <a href="/" title="Link to {props.title}">
                <img src={props.img} alt="" />
            </a>
            <div className="project-info">
                <h3>{props.title}</h3>
                <ul>
                    <li>React</li>
                    <li>SCSS</li>
                    <li>Gatsby</li>
                </ul>
                <p>{
                    props.description ?
                    props.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }</p>
                <div className="links">
                    <a href="/" title="Github link" target="_blank">
                        <img src={socialImages.githubIcon} alt="" />
                    </a>
                    <a href="/" title="Link to {props.title}" target="_blank">
                        <img src={socialImages.linkIcon} alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProject;