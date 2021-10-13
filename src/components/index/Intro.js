import React from "react"
import { Link } from "gatsby"
import Container from "../global/Container"

const Intro = () => {
  return (
    <article className="intro">
      <Container>
        <div className="two-col">
          <div className="photo" aria-label="Photo of Megan"></div>
          <div>
            <div className="greeting">
              <span role="img" aria-label="Wave emoji" className="wave">
                👋
              </span>
              <h1>Hi, I'm Megan.</h1>
            </div>
            <p>I'm a full-stack web developer based out of Milwaukee, WI.</p>
            <p>I enjoy building websites and applications</p>
            <p>
              Currently, I work for{" "}
              <a
                href="https://www.jackson.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                Jackson National Life
              </a>{" "}
              as a developer where I create accessible and intuitive web
              experiences focused on the retirement financial services industry.
            </p>
            <p>I also run a freelance web design agency, Lofi Web Studio.</p>
            <Link to="/about">Learn more about me here →</Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Intro
