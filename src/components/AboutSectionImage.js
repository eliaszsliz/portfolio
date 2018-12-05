
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'



const AboutSectionImage = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <>
            <Img fluid={data.placeholderImage.childImageSharp.fixed} />
            {data.site}
        </>
    )}
  />
)

export default AboutSectionImage