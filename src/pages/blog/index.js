import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  blogContainer,
  allPosts,
  post,
  postTitle,
  postSubtitle,
  postPosted,
  navButtonsDiv,
  navButton,
} from "./blog.module.css"

const BlogPage = ({ data }) => {

  const posts = data.allMdx.nodes
  const [displayedPosts, setDisplayedPosts] = useState([])
  const [siteNumber, setSiteNumber] = useState(0)


  useEffect(() => {
    setDisplayedPosts(posts.slice(siteNumber * 9, (siteNumber + 1) * 9))
  }, [siteNumber, posts]);

  const handleSiteUp = () => {
    console.log("forward clicked")
    setSiteNumber(siteNumber + 1)

  }
  const handleSiteDown = () => {
    console.log("back clicked")
    setSiteNumber(siteNumber - 1)
  }

  return (
    <Layout pageTitle="Blog Posts">
      <div className={blogContainer}>
        <ul className={allPosts}>
          {
            displayedPosts.map(blogPost => (
              <article key={blogPost.id} className={post}>
                <Link className={postTitle} to={`/blog/${blogPost.slug}`}>
                  <h2>

                    {blogPost.frontmatter.title}

                  </h2>

                  <p className={postSubtitle}> {blogPost.frontmatter.subtitle}</p>
                  <p className={postPosted}>Posted: {blogPost.frontmatter.date}</p>
                  <span className={blogPost.frontmatter.topic}>
                    {blogPost.frontmatter.topic}</span>
                </Link>
              </article>
            ))
          }
        </ul>
        <div className={navButtonsDiv}>
          <button className={navButton} disabled={siteNumber === 0 ? true : false} onClick={handleSiteDown}> Forth </button>
          <button className={navButton} disabled={siteNumber + 1 >= (posts.length / 9)} onClick={handleSiteUp}>Back</button>
        </div>
      </div>
    </Layout >
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/blog/"}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          subtitle
          topic
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default BlogPage