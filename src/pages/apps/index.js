import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  apps,
  appContainer,
  appName,
  singleApp,
} from "./apps.module.css"

const AppPage = ({ data }) => {
  return (
    <Layout pageTitle="My Apps">
      <div className={apps}>
        {
          data.allMdx.nodes.map(node => (
            <Link className={appContainer} to={`/apps/${node.slug}`}>
              <article key={node.id} className={singleApp}>
                <div className={appName}>
                  {node.frontmatter.title}
                </div>
              </article>
            </Link>
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