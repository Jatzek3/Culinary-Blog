import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/SEO/SEO';
import {
  post,
  postSubtitle,
  postImage,
  postContainer,
  imageBackground,
  postBody,
} from "./blogPost.module.css"

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Seo title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.description} />
      <div className={postContainer}>
        <div className={post}>
          <p className={postSubtitle}>{data.mdx.frontmatter.subtitle} </p>
          <div className={postBody}>
            <MDXRenderer >
              {data.mdx.body}
            </MDXRenderer>
          </div>
        </div>
        <div className={imageBackground}>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            className={postImage}
            title={`a photo by ${data.mdx.frontmatter.hero_image_credit_text} more content on ${data.mdx.frontmatter.hero_image_credit_link}`}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    mdx(slug: {eq: $slug}, fileAbsolutePath: {regex: "/way/"}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
        category
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

export default BlogPost