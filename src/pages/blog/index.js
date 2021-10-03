import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {

  const [posts, setPosts] = useState([])
  const [ProgrammingActive, setProgrammmingActive] = useState(true)
  const [MoviesActive, setMoviesActive] = useState(true)
  const [CookingActive, setCookingActive] = useState(true)
  const [SocietyActive, setSocietyActive] = useState(true)

  useEffect(() => {
    setPosts(data.allMdx.nodes)
  }, [])

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        <li><button>Programming</button></li>
        <li><button>Cooking</button></li>
        <li><button>Movies</button></li>
        <li><button>Society</button></li>
      </ul>
      {
        posts.map(blogPost => (
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