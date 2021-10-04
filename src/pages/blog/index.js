import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {

  const [posts, setPosts] = useState([])
  const [ProgrammingActive, setProgrammmingActive] = useState(false)
  const [MoviesActive, setMoviesActive] = useState(false)
  const [CookingActive, setCookingActive] = useState(false)
  const [SocietyActive, setSocietyActive] = useState(false)
  const [displayedPosts, setDisplayedPosts] = useState([])

  useEffect(() => {
    setPosts(data.allMdx.nodes)
    setDisplayedPosts(data.allMdx.nodes)
  }, []);

  const handleProgrammingClick = (e) => {
    e.preventDefault()
    setMoviesActive(false);
    setCookingActive(false)
    setSocietyActive(false)
    !ProgrammingActive ? setProgrammmingActive(true) : setProgrammmingActive(false)
    if (ProgrammingActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Programming"))
    } else {
      setDisplayedPosts(posts)

    }
  }
  const handleCookingClick = (e) => {
    e.preventDefault()
    setMoviesActive(false);
    setProgrammmingActive(false)
    setSocietyActive(false)
    !CookingActive ? setCookingActive(true) : setCookingActive(false)
    if (CookingActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Cooking"))
    } else {
      setDisplayedPosts(posts)
    }
  }

  const handleMoviesClick = (e) => {
    e.preventDefault()
    setProgrammmingActive(false)
    setSocietyActive(false)
    setCookingActive(false)
    !MoviesActive ? setMoviesActive(true) : setMoviesActive(false)
    if (MoviesActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Movies"))
    } else {
      setDisplayedPosts(posts)
    }
  }

  const handleSocietyClick = (e) => {
    e.preventDefault()
    console.log(SocietyActive)
    setMoviesActive(false)
    setProgrammmingActive(false)
    setCookingActive(false)
    !SocietyActive ? setSocietyActive(true) : setSocietyActive(false)
    if (SocietyActive) {
      setDisplayedPosts(posts.filter(post => post.frontmatter.topic === "Society"))
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