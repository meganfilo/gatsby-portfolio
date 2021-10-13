import React from "react"
import { Link } from "gatsby"
import CloseImg from "../../../images/close.svg"

const mobileNav = props => {
  let mobileNavClasses = "mobilenav__popout"
  let expanded = false
  if (props.show) {
    mobileNavClasses = "mobilenav__popout open"
    expanded = true
  }
  return (
    <div
      aria-label="menu"
      aria-expanded={expanded}
      className={mobileNavClasses}
    >
      <button
        className="close__button"
        aria-label="Close navigation menu"
        onClick={props.closeMobileNavClickHandler}
      >
        <img src={CloseImg} alt="" />
      </button>
      <div className="mobilenav__link-list">
        <Link to="/about" className="mobilenav__link">
          About
        </Link>
        <Link to="/articles" className="mobilenav__link">
          Articles
        </Link>
        <Link to="/work" className="mobilenav__link">
          Work
        </Link>
        <Link to="/contact" className="mobilenav__link">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default mobileNav
