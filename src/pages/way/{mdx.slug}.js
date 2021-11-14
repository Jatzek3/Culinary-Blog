import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
  roadPart,
  partContainer,
  partBody,
  partDates,
  partText
} from "./part.module.css"

const WayPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={roadPart}>
        <div className={partContainer}>
          <div className={partBody}>
            <div className={partDates}>
              <p>From: {data.mdx.frontmatter.from}</p>
              <p>Till: {data.mdx.frontmatter.till}</p>
            </div>
            <MDXRenderer className={partText}>
              {data.mdx.body}
            </MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        from(formatString: "MMMM D, YYYY")
        till(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
      }
    }
  }
`

export default WayPost