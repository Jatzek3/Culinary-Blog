import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  way,
  partContainer,
  part,
  partName,
  partFrom,
  partTo,
  wayImg,
  allParts,
} from "./way.module.css"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Road">
      <div className={way}>
        <StaticImage className={wayImg}
          alt="black and white picture of a road with surrounding trees"
          src="../../images/way.jpg"
        />
        <div className={allParts}>
          {
            data.allMdx.nodes.map(node => (
              <Link className={partContainer} to={`/way/${node.slug}`}>
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