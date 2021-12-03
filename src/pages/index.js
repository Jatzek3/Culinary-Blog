import * as React from 'react'
import Layout from '../components/layout'
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
  newestPosts,
} from "../css/indexjs.module.css"

const IndexPage = ({ data }) => {
  const newPosts = data.allMdx.nodes

  return (
    <Layout pageTitle="Home Page">
      <div className={mainContainer}>
        {console.log(newPosts)}
        <div className={intro}>
          <h2 className={introGreeting}>Hey!</h2>
          <p className={introText}>Take a deep dive to surface astonishing ideas.</p>
          <Link classname={introButtonText} to="/about"><button className={introButton}>Explore</button></Link>
        </div>
        <div className={imgContainer}>
          <StaticImage className={introImg}
            alt="Staircase with a sign on it 'All ideas grow out of other ideas."
            src="../images/intro.jpg"
          />
        </div>
      </div>
      <div className={siteBreak}>
      </div>
      <div className={newestPosts}>
        Check out the newest blog posts:
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