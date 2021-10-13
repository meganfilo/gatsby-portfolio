import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/global/Layout";
import Container from "../components/global/Container";
import "../styles/styles.scss";

const ContactPage = () => (
    <Layout>
        <Seo title="Contact" />
        <Container>
            <div className="content-page">
                <h1>Let's Chat!</h1>
                <article>
                    <p>I'm currently available for freelance opportunities, collaborations, or to provide mentorship to up-and-coming web developers.</p>
                    <p>If you're interested in getting in touch, please reach out via socials or send me a message at <strong>meganfilodev</strong> at <strong>gmail</strong> dot com.
                    </p>
                </article>
                <article>
                <h2>Socials</h2>
                <ul>
                    <li><strong>Code repos:</strong> <a href="https://github.com/meganfilo" target="_blank" rel="noreferrer noopener">@meganfilo</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/meganfilo/" target="_blank" rel="noreferrer noopener">@meganfilo</a></li>
                </ul>
            </article>
            </div>
        </Container>
    </Layout>
)

export default ContactPage; 