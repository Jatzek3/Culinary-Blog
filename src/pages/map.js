import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

const MapPage = ({ data }) => {

    return (
        <Layout pageTitle="Map of the blog posts">
            <h2>Cooking</h2>
            {data.allMdx.nodes.filter
                (node => node.frontmatter.topic === "Cooking")
                .map(node => (
                    <p>
                        <Link to={`/apps/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link></p>
                ))}
            <h2>Movies</h2>
            {data.allMdx.nodes.filter
                (node => node.frontmatter.topic === "Movies")
                .map(node => (
                    <p>
                        <Link to={`/apps/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link></p>
                ))}
            <h2>Programming</h2>
            {data.allMdx.nodes.filter
                (node => node.frontmatter.topic === "Programming")
                .map(node => (
                    <p>
                        <Link to={`/apps/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link></p>
                ))}
            <h2>Society</h2>
            {data.allMdx.nodes.filter
                (node => node.frontmatter.topic === "Society")
                .map(node => (
                    <p>
                        <Link to={`/apps/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link></p>
                ))}
        </Layout>
    )
}
export const query = graphql`
  query {
    allMdx {
        nodes {
          frontmatter {
            category
            title
            topic
          }
          slug
        }
      }  
  }
`

export default MapPage