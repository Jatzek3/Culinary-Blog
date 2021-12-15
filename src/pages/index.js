import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/SEO/SEO';
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import {
  mainContainer,
  intro,
  introText,
  introButton,
  introButtonText,
  imgContainer,
  introImg,
  introGreeting,
  siteBreak,
  secondPage,
  newestPosts,
  introImg2,
  post,
  postTitle,
  postSubtitle,
  postPosted,
  introText2,
} from "./indexjs.module.css"

const IndexPage = ({ data }) => {
  const newPosts = data.allMdx.nodes

  return (
    <Layout pageTitle="Home Page">
      <Seo />
      <div className={mainContainer}>
        {console.log(newPosts)}
        <div className={intro}>
          <h2 className={introGreeting}>Hey!</h2>
          <p className={introText}>Take a deep dive to surface astonishing ideas.</p>
          <Link classname={introButtonText} to="/about"><button className={introButton}>Get started</button></Link>
        </div>
        <div className={imgContainer}>
          <StaticImage className={introImg}
            alt="Old bike."
            src="../images/introImg.jpg"
          />
        </div>
      </div>
      <div className={siteBreak}>
      </div>
      <div className={secondPage}>
        <StaticImage className={introImg2}
          alt="Staircase with a sign on it 'All ideas grow out of other ideas."
          src="../images/intro.jpg"
        />
        <div className={newestPosts}>
          <p className={introText2}>
            Check out the newest blog posts:
          </p>
          {
            newPosts.map(blogPost => (
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
        </div>

      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/blog/"}}
      limit: 3
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          subtitle
          topic
        }
        id
        slug
      }
    }
  }
  `

export default IndexPage