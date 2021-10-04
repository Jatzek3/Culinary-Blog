import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {

  const [posts, setPosts] = useState([])
  const [ProgrammingNotActive, setProgrammmingNotActive] = useState(true)
  const [MoviesNotActive, setNotMoviesNotActive] = useState(true)
  const [CookingNotActive, setCookingNotActive] = useState(true)
  const [SocietyNotActive, setSocietyNotActive] = useState(true)
  const [displayedPosts, setDisplayedPosts] = useState([])

  useEffect(() => {
    setPosts(data.allMdx.nodes)
    setDisplayedPosts(data.allMdx.nodes)
  }, []);


  const handleProgrammingClick = () => {
    setNotMoviesNotActive(true);
    setCookingNotActive(true)
    setSocietyNotActive(true)
    !ProgrammingNotActive ? setProgrammmingNotActive(true) : setProgrammmingNotActive(false)
    if (ProgrammingNotActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Programming"))
      console.log("render")
    } else {
      setDisplayedPosts(posts)

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
      setDisplayedPosts(posts)
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
      setDisplayedPosts(posts)
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
      setDisplayedPosts(posts)
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