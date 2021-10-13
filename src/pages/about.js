import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/global/Layout"
import Container from "../components/global/Container"
import "../styles/styles.scss"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Container>
      <div className="content-page">
        <h1>About Me</h1>
        <article>
          <p>
            I’m Megan Filo, a full-stack web developer currently living in
            Milwaukee, Wisconsin.
          </p>
          <p>
            I originally moved to Nashville, Tennessee in 2016 to start a career
            in the music business. I landed a job with a major record label that
            involved creating and maintaining e-commerce shops for artists that
            occasionally had me doing basic HTML updates and some fun graphic
            design work for social media content. At another record label gig, I
            created and maintained Shopify stores.
          </p>
          <p>
            Those tiny pieces of web development work sparked my interest and I
            was ready to learn more. After a year of late nights and weekends of
            self-study, I landed my first web developer gig in 2019. Since then,
            I have continued to learn more about many aspects of front-end and
            back-end web development and picking up new technologies when I can.
          </p>
          <p>
            When I’m not staring deeply into a text editor, I’m usually playing
            video games, brewing beer, or out getting ice cream with my husband.
          </p>
          <p>
            I also play drums 🥁. You can catch me playing around the southern
            U.S. with a badass artist named{" "}
            <a
              href="http://www.catalinamusic.net/en/welcome"
              target="_blank"
              rel="noreferrer noopener"
            >
              Catalina
            </a>
            .
          </p>
        </article>
      </div>
    </Container>
  </Layout>
)

export default AboutPage
