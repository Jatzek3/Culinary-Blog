import * as React from 'react'
import { graphql } from 'gatsby'
// import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/SEO/SEO';
import { StaticImage } from 'gatsby-plugin-image'
import {
  // apps,
  // appContainer,
  // appName,
  // singleApp,
  IMG,
} from "./apps.module.css"

const AppPage = ({ data }) => {

  return (
    <Layout pageTitle="Apps">
      <Seo />
      <StaticImage className={IMG}
        alt="Two people sitting on a couach with a baloon looking at the see."
        src="./workinprogress.png"
      />
      {/* For future use 
      <div className={apps}>
        {
          data.allMdx.nodes.map(node => (

            <article key={node.id} className={singleApp}>
              <Link className={appContainer} to={`/apps/${node.slug}`}>
                <div className={appName}>
                  {node.frontmatter.title}
                </div>
              </Link>
            </article>

          ))
        }
      </div> */}

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