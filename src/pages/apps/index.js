import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const AppPage = ({ data }) => {
  return (
    <Layout pageTitle="My Apps">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              {console.log(node)}
              <Link to={`/app/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Created: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/apps/"}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default AppPage