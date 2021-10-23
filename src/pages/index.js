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
} from "../css/indexjs.module.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={mainContainer}>
        <div className={intro}>
          <p className={introText}>Dig into the mine of fascinating ideas.</p>
          <button className={introButton}><Link classname={introButtonText} to="/about">Explore</Link></button>
        </div>
        <StaticImage className={introImg}
          alt="An Img from the internet"
          src="../images/_HYHtD8F.webp"
        />
      </div>
    </Layout>
  )
}

export default IndexPage