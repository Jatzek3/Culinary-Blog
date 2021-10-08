import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Dig into the mine of fascinating ideas.</p>
      {/* <p>Tasty recipes, thoughts about movies and programing
        technologies simply explained You can find on<Link to="/blog">my blog</Link>
      </p>
      <p>Some of my <Link to="/apps">Apps</Link></p>
      <p>And description of my <Link to="/way">Programming Journey</Link></p>
      <p>List of blog posts by category<Link to="/map">Map</Link></p> */}
      <button><Link to="/about">Explore</Link></button>
      <StaticImage
        alt="An Img from the internet"
        src="../images/_HYHtD8F.webp"
      />
    </Layout>
  )
}

export default IndexPage