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
} from "../css/indexjs.module.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={mainContainer}>
        <div className={intro}>
          <h2 className={introGreeting}>Hiya!</h2>
          <p className={introText}>Dig into the mine of fascinating ideas.</p>
          <Link classname={introButtonText} to="/about"><button className={introButton}>Explore</button></Link>
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