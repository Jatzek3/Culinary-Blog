import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MobileNavigation from "./navbar/MobileNavigation"
import Navigation from "./navbar/Navigation"
import {
  container,
  heading,
  siteTitle,
  mainbar,
  pageTitleStyle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {


  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={mainbar}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <MobileNavigation />
        <Navigation />
      </div>
      <h1 className={heading}><span className={pageTitleStyle}>{pageTitle}</span></h1>
      <main>
        {children}
      </main>
    </div >
  )
}

export default Layout