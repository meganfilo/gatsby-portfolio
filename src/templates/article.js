import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/global/Layout";
import Container from "../components/global/Container";

export default function Template({data}) {
    const article = data.markdownRemark

    return(
        <Layout>
            <Seo title={article.frontmatter.title} />
            <Container>
                <div className=" article">
                    <header className="article__header">
                        <div className="article__header--metadata">
                            <h1>{article.frontmatter.title}</h1>
                            <p>{article.frontmatter.date}</p>
                        </div>
                    </header>
                    <article dangerouslySetInnerHTML={{__html: article.html }} className="article__body" />
                </div>
            </Container>
        </Layout>
    )
}

export const articleQuery = graphql`
    query ArticleByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                title
                author
                date(formatString: "MMMM Do, YYYY")
            }
        }
    }
`