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
  imgContainer,
  introImg,
  introGreeting,
} from "../css/indexjs.module.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={mainContainer}>
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
    </Layout>
  )
}

export default IndexPage