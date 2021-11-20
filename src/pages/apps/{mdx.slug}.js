import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const App = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Created: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

// For future use
// export const query = graphql`
//   query($slug: String) {
//     mdx(slug: {eq: $slug}) {
//       body
//       frontmatter {
//         technologies
//         title
//         date(formatString: "MMMM DD, YYYY")
//         hero_image_alt
//         hero_image {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `

export default App