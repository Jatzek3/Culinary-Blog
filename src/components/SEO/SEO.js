/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(
        graphql`
       query {
         site {
           siteMetadata {
             title
           }
         }
       }
     `
    )

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title || title

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.social?.twitter || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: "google-site-verification",
                    content: "6c4eAoSPkeHAGO6wSVHJ3NUM8OwBynGXGsaC8ukyeUM"
                },
                {
                    name: 'keywords',
                    content: meta,
                }
            ].concat(meta)}
        >
            <script type="application/ld+json">
                {`
                    {
                    "@type": "Personal",
                    "author": "Jacek Kawalec",
                    "url": "https://www.theyellowpages.live",
                    "name": "Jatzek3",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "e-mail": "jacekkawalec@yahoo.com",
                        "contactType": "jokerchocolate@gmail.com"
                    }
                    }
                `}
            </script>
        </Helmet>
    )
}

Seo.defaultProps = {
    title: 'The Yellow Pages',
    lang: `en`,
    meta: ["Programming", "Cooking", "Society", "Movies", "Jatzek3", "Blog", "Portfolio"],
    description: `A personal blog about cooking, coding and composing`,
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default Seo