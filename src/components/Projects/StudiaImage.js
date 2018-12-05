import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StudiaImage = () => (
    <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "screens/studia/studia-ipad.png" }) {
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Img
            alt="Studia mockup on ipad"
            style={{ minHeight: '250px', minWidth: '250px'}}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />}
      />
)
export default StudiaImage