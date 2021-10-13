import React from "react"
import Container from "../global/Container"

const Skills = () => {
  return (
    <article className="skills">
      <Container>
        <div className="skills__content">
          <h2>Skills</h2>
          <div className="skills__grid">
            <div className="skills__grid--item">
              <h3>Front-end</h3>
              <ul>
                <li>HTML &amp; (S)CSS</li>
                <li>Javascript (ES6+)</li>
                <li>React</li>
                <li>Gatsby and Next.js</li>
                <li>jQuery</li>
                <li>Repsonsive HTML Email development</li>
              </ul>
            </div>
            <div className="skills__grid--item">
              <h3>Back-end</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB / Mongoose</li>
                <li>SQL / MySQL</li>
              </ul>
            </div>
            <div className="skills__grid--item">
              <h3>UI &amp; UX Design</h3>
              <ul>
                <li>Good 'ol pen &amp; paper</li>
                <li>Adobe Photoshop</li>
                <li>Adobe XD &amp; Figma</li>
              </ul>
            </div>
            <div className="skills__grid--item">
              <h3>Other Tools</h3>
              <ul>
                <li>Git</li>
                <li>NPM &amp; Yarn</li>
                <li>Webpack</li>
                <li>Heroku &amp; Netlify</li>
                <li>Wordpress</li>
                <li>Adobe Experience Manager</li>
                <li>Strapi CMS</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Skills
