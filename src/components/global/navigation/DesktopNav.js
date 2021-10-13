import React from "react"
import Container from "../Container"
import { Link } from "gatsby"
import Hamburger from "./Hamburger"
import Logo from "../../../images/nav-logo.png"

const DesktopNav = props => {
  return (
    <Container isNav={true}>
      <nav className="desktopnav" role="navigation">
        <Link to="/" className="brand" aria-label="Home link">
          <img src={Logo} alt=""></img>
        </Link>
        {/* <div className="hamburger">
                    <Hamburger click={props.mobileNavClickHandler}/>
                </div>
                <div className="nav__link-list">
                    <Link to="/about" className="nav__link" activeClassName="active">
                        About
                    </Link>
                    <Link to="/articles" className="nav__link" activeClassName="active">
                        Articles
                    </Link>
                    <Link to="/work" className="nav__link" activeClassName="active">
                        Work
                    </Link>
                    <Link to="/contact" className="nav__link" activeClassName="active">
                        Contact
                    </Link>
                </div> */}
      </nav>
    </Container>
  )
}

export default DesktopNav
