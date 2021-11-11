import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  way,
  partContainer,
  part,
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


            <Link className={partContainer} to={`/blog/${node.slug}`}>
              <article key={node.id} className={part}>
                <h2 className={partName} >

                  {node.frontmatter.title}

                </h2>
                <p className={partFrom}>From: {node.frontmatter.from}</p>
                <p className={partTo}>To: {node.frontmatter.till}</p>
              </article>
            </Link>


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