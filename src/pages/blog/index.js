import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {

  const [posts, setPosts] = useState([])
  const [ProgrammingActive, setProgrammmingActive] = useState(true)
  const [MoviesActive, setMoviesActive] = useState(true)
  const [CookingActive, setCookingActive] = useState(true)
  const [SocietyActive, setSocietyActive] = useState(true)
  const [displayedPosts, setDisplayedPosts] = useState([])

  useEffect(() => {
    setPosts(data.allMdx.nodes)
    setDisplayedPosts(data.allMdx.nodes)
  }, []);


  const handleProgrammingClick = () => {
    setMoviesActive(true);
    setCookingActive(true)
    setSocietyActive(true)
    !ProgrammingActive ? setProgrammmingActive(true) : setProgrammmingActive(false)
    if (ProgrammingActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Programming"))
      console.log("render")
    } else {
      setDisplayedPosts(posts)

    }
  }
  const handleCookingClick = () => {
    setMoviesActive(true);
    setProgrammmingActive(true)
    setSocietyActive(true)
    !CookingActive ? setCookingActive(true) : setCookingActive(false)
    if (CookingActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Cooking"))
      console.log("render")
    } else {
      setDisplayedPosts(posts)
    }
  }

  const handleMoviesClick = () => {
    setProgrammmingActive(true)
    setSocietyActive(true)
    setCookingActive(true)
    !MoviesActive ? setMoviesActive(true) : setMoviesActive(false)
    if (MoviesActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Movies"))
      console.log("render")
    } else {
      setDisplayedPosts(posts)
    }
  }

  const handleSocietyClick = () => {
    setMoviesActive(true)
    setProgrammmingActive(true)
    setCookingActive(true)
    !SocietyActive ? setSocietyActive(true) : setSocietyActive(false)
    if (SocietyActive) {
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