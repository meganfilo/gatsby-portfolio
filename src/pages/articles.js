import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/global/Layout";
import Container from "../components/global/Container";
import "../styles/styles.scss";

const ArticlesPage = ({data}) => (
    <Layout>
        <Seo title="Articles" />
        <Container>
            <div className="content-page articles">
                <h1>Articles</h1>
                <article>
                    {data.allMarkdownRemark.edges.map(article => (
                        <Link key={ article.node.id } to={ article.node.frontmatter.path } className="article__posting">
                            <section className="article__posting--content">
                                    <div className="img-container">
                                        <img src={article.node.frontmatter.thumbnail.publicURL} alt="" />
                                    </div>
                                    <div>
                                        <h3>{ article.node.frontmatter.title }</h3>
                                        <p className="date">{ article.node.frontmatter.date }</p>
                                    </div>
                            </section>
                        </Link>
                    ))}
                </article>
            </div>
        </Container>
    </Layout>
)

export const pageQuery = graphql`
    query ArticleIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        author
                        date(formatString: "MMMM Do, YYYY")
                        thumbnail {
                            relativePath
                            publicURL
                        }
                    }
                }
            }
        }
    }  
`

export default ArticlesPage; 