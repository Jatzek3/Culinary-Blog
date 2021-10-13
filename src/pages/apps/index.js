import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  apps,
  appContainer,
  appName,
} from "./apps.module.css"

const AppPage = ({ data }) => {
  return (
    <Layout pageTitle="My Apps">
      <div className={apps}>
        {
          data.allMdx.nodes.map(node => (
            <article className={appContainer} key={node.id}>
              <h2 className={appName}>
                {console.log(node)}
                <Link to={`/apps/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              {/* <p>Created: {node.frontmatter.date}</p> */}
            </article>
          ))
        }
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/apps/"}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default AppPage