import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import {
  mainContainer,
  intro,
  introText,
  introButton,
  introButtonText,
  introImg,
  introGreeting,
  hvrUnderline,
} from "../css/indexjs.module.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={mainContainer}>
        <div className={intro}>
          <h2 className={introGreeting}>Hey!</h2>
          <p className={introText}>Take a deep dive to surface astonishing ideas.</p>
          <Link classname={introButtonText, hvrUnderline} to="/about"><button className={introButton}>Explore</button></Link>
        </div>
        <StaticImage className={introImg}
          alt="Two people sitting on a couach with a baloon looking at the see."
          src="../images/intro.jpg"
        />
      </div>
    </Layout>
  )
}

export default IndexPage