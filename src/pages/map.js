import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import {
    map,
    mapHeader,
    mapWindow,
    mapWindowLink,
} from "../css/map.module.css"

const MapPage = ({ data }) => {

    return (
        <Layout pageTitle="Map of the blog posts">
            <div className={map}>
                <h2 className={mapHeader}>Cooking</h2>
                {data.allMdx.nodes.filter
                    (node => node.frontmatter.topic === "Cooking")
                    .map(node => (
                        <p className={mapWindow}>
                            <Link className={mapWindowLink} to={`/apps/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link></p>
                    ))}
                <h2 className={mapHeader}>Movies</h2>
                {data.allMdx.nodes.filter
                    (node => node.frontmatter.topic === "Movies")
                    .map(node => (
                        <p lassName={mapWindow}>
                            <Link className={mapWindowLink} to={`/apps/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link></p>
                    ))}
                <h2 className={mapHeader}>Programming</h2>
                {data.allMdx.nodes.filter
                    (node => node.frontmatter.topic === "Programming")
                    .map(node => (
                        <p className={mapWindow}>
                            <Link className={mapWindowLink} to={`/apps/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link></p>
                    ))}
                <h2 className={mapHeader}>Society</h2>
                {data.allMdx.nodes.filter
                    (node => node.frontmatter.topic === "Society")
                    .map(node => (
                        <p className={mapWindow}>
                            <Link className={mapWindowLink} to={`/apps/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link></p>
                    ))}
            </div>

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