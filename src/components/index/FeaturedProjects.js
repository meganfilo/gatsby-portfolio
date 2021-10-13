import React from "react"
import { Link } from "gatsby"
import Container from "../global/Container"
import FeaturedProject from "../global/portfolio/FeaturedProject"
import images from "../../../content/projects/data/images"

const Portfolio = () => {
  return (
    <article className="featured-projects">
      <Container>
        <h2>Featured Projects</h2>
        <p>This section is currently getting a facelift. :)</p>
        <p>Check back soon!</p>
        {/* <FeaturedProject title="My Project" description="my description!" img={images.amg}/>
                <FeaturedProject title="My Project" description="my description!" img={images.amg}/>
                <Link to="/work" className="button">View My Portfolio</Link> */}
      </Container>
    </article>
  )
}

export default Portfolio
