import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Dig into the mine of fascinating ideas.</p>
      <button><Link to="/about">Explore</Link></button>
      <StaticImage
        alt="An Img from the internet"
        src="../images/_HYHtD8F.webp"
      />
    </Layout>
  )
}

export default IndexPage