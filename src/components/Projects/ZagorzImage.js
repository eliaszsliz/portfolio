import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ZagorzImage = () => (
    <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "screens/zagorz/zagorz-macpro.png" }) {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Img
            style={{ minHeight: '250px', minWidth: '400px'}}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />}
      />
)
export default ZagorzImage