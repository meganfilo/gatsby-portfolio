import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";


const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    keywords
                    userTwitter
                }
            }
        }
    `)

    return (
        <Helmet 
            title={`${title} | ${data.site.siteMetadata.title}`}
            keywords={data.site.siteMetadata.keywords}
            lang="en"
        >
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={data.site.siteMetadata.userTwitter} />
            <meta name="twitter:title" content={`${title} | ${data.site.siteMetadata.title}`} />
        </Helmet>
    )
}


export default Seo;
