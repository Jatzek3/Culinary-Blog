import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { part, partBody } from "./part.module.css"

const WayPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={part}>
        <p>Posted: {data.mdx.frontmatter.date}</p>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <MDXRenderer className={partBody}>
          {data.mdx.body}
        </MDXRenderer>
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default WayPost