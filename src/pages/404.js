import React from "react"
import Seo from "../components/Seo";
import Layout from "../components/global/Layout";
import Container from "../components/global/Container";

const NotFoundPage = () => (
  <Layout>
      <Seo title="404" />
      <article className="fourohfour">
      <Container>

        <h1>404! Don't Cry Over Spilled Page.</h1>
        <img src="/static/spilled_milk.png" alt="A cartoon of milk spilling out of a carton."/>
        <p>Gulp. You hold back tears as the white liquid spreads across the floor from your sad looking carton. You should have bought the chocolate milk, it was clearly the better choice. And then maybe you wouldn’t have so carelessly smacked it across the room when you emphatically pointed at a bird outside. Too late now. You wipe the single tear from your eye and go fetch the mop.</p>
        </Container>

        </article>   
  </Layout>
    )

export default NotFoundPage;
