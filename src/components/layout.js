import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    mainbar,
    site,
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
                {/* <Menu right>
                    <Link to="/" className="">Home</Link>
                    <Link to="/about" className="" href="/about">About</Link>
                    <Link to="/contact" className="" href="/contact">Contact</Link>
                </Menu> */}
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>
                                HOME
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/about" className={navLinkText}>
                                ABOUT
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/blog" className={navLinkText}>
                                BLOG
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/apps" className={navLinkText}>
                                APPS
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/way" className={navLinkText}>
                                ROAD
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/map" className={navLinkText}>
                                MAP
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/contact" className={navLinkText}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
            <h1 className={heading}>{pageTitle}</h1>
            <main>
                {children}
            </main>
        </div >
    )
}

export default Layout