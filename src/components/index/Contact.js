import React from "react"
import Container from "../global/Container"

const Contact = () => {
  return (
    <article className="contact">
      <Container>
        <h2>Contact</h2>
        <form name="contact" method="POST" data-netlify="true">
          <div className="input-group">
            <label htmlFor="name">
              Your Name:
            </label>
             <input id="name" type="text" name="name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">
              Your Email: 
            </label>
            <input id="email" type="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="message">
              Message: 
            </label>
            <textarea id="message" placeholder="How can I help you?" name="message"></textarea>
          </div>
            <button tabIndex="0" type="submit">Send</button>
        </form>
      </Container>
    </article>
  )
}

export default Contact
