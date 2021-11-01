import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  postNav,
  postNavItem,
  postNavButton,
  post,
  postTitle,
  postSubtitle,
  postPosted,
  Society,
  Movies,
  Programming,
  Cooking

} from "./blog.module.css"

const BlogPage = ({ data }) => {

  const posts = data.allMdx.nodes
  const [ProgrammingNotActive, setProgrammmingNotActive] = useState(true)
  const [MoviesNotActive, setNotMoviesNotActive] = useState(true)
  const [CookingNotActive, setCookingNotActive] = useState(true)
  const [SocietyNotActive, setSocietyNotActive] = useState(true)
  const [displayedPosts, setDisplayedPosts] = useState([])
  const [siteNumber, setSiteNumber] = useState(0)

  useEffect(() => {
    setDisplayedPosts(posts.slice(siteNumber * 9, (siteNumber + 1) * 9))
  }, [siteNumber]);

  const handleSiteUp = () => {
    console.log("forward clicked")
    setSiteNumber(siteNumber + 1)

  }
  const handleSiteDown = () => {
    console.log("back clicked")
    setSiteNumber(siteNumber - 1)
  }


  const handleProgrammingClick = () => {
    setNotMoviesNotActive(true);
    setCookingNotActive(true)
    setSocietyNotActive(true)
    !ProgrammingNotActive ? setProgrammmingNotActive(true) : setProgrammmingNotActive(false)
    if (ProgrammingNotActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Programming"))
      console.log("render")
    } else {
      setDisplayedPosts(posts.slice(siteNumber * 9, (siteNumber + 1) * 9))

    }
  }
  const handleCookingClick = () => {
    setNotMoviesNotActive(true);
    setProgrammmingNotActive(true)
    setSocietyNotActive(true)
    !CookingNotActive ? setCookingNotActive(true) : setCookingNotActive(false)
    if (CookingNotActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Cooking"))
      console.log("render")
    } else {
      setDisplayedPosts(posts.slice(siteNumber * 9, (siteNumber + 1) * 9))
    }
  }

  const handleMoviesClick = () => {
    setProgrammmingNotActive(true)
    setSocietyNotActive(true)
    setCookingNotActive(true)
    !MoviesNotActive ? setNotMoviesNotActive(true) : setNotMoviesNotActive(false)
    if (MoviesNotActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Movies"))
      console.log("render")
    } else {
      setDisplayedPosts(posts.slice(siteNumber * 9, (siteNumber + 1) * 9))
    }
  }

  const handleSocietyClick = () => {
    setNotMoviesNotActive(true)
    setProgrammmingNotActive(true)
    setCookingNotActive(true)
    !SocietyNotActive ? setSocietyNotActive(true) : setSocietyNotActive(false)
    if (SocietyNotActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Society"))
      console.log("render")
    } else {
      setDisplayedPosts(posts.slice(siteNumber * 9, (siteNumber + 1) * 9))
    }
  }

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        <li><button onClick={handleProgrammingClick}>Programming</button></li>
        <li><button onClick={handleCookingClick}>Cooking</button></li>
        <li><button onClick={handleMoviesClick}>Movies</button></li>
        <li><button onClick={handleSocietyClick}>Society</button></li>
      </ul>
      {
        displayedPosts.map(blogPost => (
          <article key={blogPost.id}>
            <h2>
              {console.log(blogPost)}
              <Link to={`/blog/${blogPost.slug}`}>
                {blogPost.frontmatter.title}
              </Link>
            </h2>

            <p> {blogPost.frontmatter.subtitle}</p>
            <p>Posted: {blogPost.frontmatter.date}</p>
            <span className={blogPost.frontmatter.topic}>
              {blogPost.frontmatter.topic}</span>
          </article>
        ))
      }
      <button disabled={siteNumber === 0 ? true : false} onClick={handleSiteDown}>Back</button>
      <button disabled={siteNumber - 1 >= (displayedPosts.length / 9)} onClick={handleSiteUp}>Forward</button>
    </Layout>
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
        }
        id
        slug
      }
    }
  }
`

export default BlogPage