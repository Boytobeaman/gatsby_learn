import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layouts"
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <Layout>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ul>
        {data.allStrapiArticle.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.title}</Link>
            </h2>
            <Img fixed={document.node.cover_image.childImageSharp.fixed}/>

            <p>{document.node.content}</p>
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">col-sm-6</div>
          <div className="col-sm-6">col-sm-6</div>
          <div className="col-sm-6">col-sm-6</div>
          <div className="col-sm-6">col-sm-6</div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          cover_image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`
