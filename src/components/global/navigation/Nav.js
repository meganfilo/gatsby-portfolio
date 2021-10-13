import React, { Component } from "react"
import DesktopNav from "../navigation/DesktopNav"
import MobileNav from "../navigation/MobileNav"

export default class Nav extends Component {
  state = {
    mobileNavOpen: false,
  }

  mobileNavClickHandler = () => {
    this.setState(prevState => {
      return { mobileNavOpen: !prevState.mobileNavOpen }
    })
  }

  closeMobileNavClickHandler = () => {
    this.setState({ mobileNavOpen: false })
  }

  render() {
    return (
      <header>
        <DesktopNav mobileNavClickHandler={this.mobileNavClickHandler} />
        {/* <MobileNav 
          show={this.state.mobileNavOpen}
          closeMobileNavClickHandler={this.closeMobileNavClickHandler}
        /> */}
      </header>
    )
  }
}
