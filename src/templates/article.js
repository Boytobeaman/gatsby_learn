import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layouts"

const ArticleTemplate = ({ data }) => (
  <Layout>
  <div>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{' '}
      <Link to={`/users/${data.strapiArticle.user.id}`}>
        {data.strapiArticle.user.username}
      </Link>
    </p>
    <p>{data.strapiArticle.content}</p>
  </div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      user {
        id
        username
      }
    }
  }
`
