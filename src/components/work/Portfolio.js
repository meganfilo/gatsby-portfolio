import React from "react";
import Container from "../global/Container";
import FeaturedProject from "../global/portfolio/FeaturedProject";
import Project from "../work/Project";
import images from "../../../content/projects/data/images";

const Portfolio = () => {
    return (
        <article className="content-page portfolio">
            <Container>
                <h1>Projects</h1>
                <FeaturedProject title="International Association of Traditional Drummers Website" description="A site made for a non-profit developed with React and Gatsby with deployment via Netlify." img={images.amg} githubLink="https://github.com/meganfilo/Intl-Assoc-Trad-Drummers-2" siteLink="www.iatdrummers.com"/>
                <FeaturedProject title="My Project" description="my description!" img={images.amg}/>
                <FeaturedProject title="My Project" description="my description!" img={images.amg}/>
                <div className="projects">
                    <Project title="Normal Project" />
                    <Project title="Normal Project" />
                    <Project title="Normal Project" />
                </div>
            </Container>
        </article>
    )
}

export default Portfolio;