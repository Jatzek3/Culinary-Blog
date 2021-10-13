import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  way,
  partContainer,
  partName,
  partFrom,
  partTo,
} from "./way.module.css"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div className={way}>
        {
          data.allMdx.nodes.map(node => (
            <article className={partContainer} key={node.id}>
              <h2 className={partName}>
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p className={partFrom}>From: {node.frontmatter.from}</p>
              <p className={partTo}>To: {node.frontmatter.till}</p>
            </article>
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___from, order: DESC}
      filter: {fileAbsolutePath: {regex: "/way/"}}
    ) {
      nodes {
        frontmatter {
          from(formatString: "MMMM D, YYYY")
          till(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage