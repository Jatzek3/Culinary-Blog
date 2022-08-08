import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/SEO/SEO';
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
} from "./road.module.css"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Road">
      <Seo />
      <div className={way}>
        <StaticImage className={wayImg}
          alt="black and white picture of a road with surrounding trees"
          src="./road.jpg"
        />
        <div className={allParts}>
          {
            data.allMdx.nodes.map(node => (
              <Link className={partContainer} to={`/road/${node.slug}`}>
                <article key={node.id} className={part}>
                  <h2 className={partName} >
                    {node.frontmatter.title}
                  </h2>
                  <p className={partTo}>To: {node.frontmatter.till}</p>
                  <p className={partFrom}>From: {node.frontmatter.from}</p>
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
      filter: {fileAbsolutePath: {regex: "/road/"}}
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