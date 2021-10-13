import React from "react"
import { Link } from "gatsby"
import Container from "../global/Container"
import images from "../../../content/global/data/images"

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <div className="footer__nav">
            <p>Copyright &copy; 2021 | Megan Filo | All Rights Reserved.</p>
            {/* <Link to="/" className="footer__nav-link">
                            Home
                        </Link>
                        <Link to="/about" className="footer__nav-link">
                            About
                        </Link>
                        <Link to="/articles" className="footer__nav-link">
                            Articles
                        </Link>
                        <Link to="/work" className="footer__nav-link">
                            Work
                        </Link>
                        <Link to="/contact" className="footer__nav-link">
                            Contact
                        </Link> */}
          </div>
          <div className="footer__socials">
            <a
              href="https://github.com/meganfilo"
              title="Github link"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={images.githubIcon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/meganfilo/"
              title="Linkedin link"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={images.linkedinIcon} alt="" />
            </a>
            <a
              href="mailto:meganfilodev@gmail.com"
              title="Email link"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={images.emailIcon} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
