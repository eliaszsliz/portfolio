import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import '../../sass/AboutSection.sass'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'



export default ({ text, imageSrc }) => (
    <div className='AboutSection'>
            <ScrollAnimation
                   animateOut='fadeOut'
                   initiallyVisible={true}
                   delay={0}
               >
                <img
                    src="/images/logo.svg"
                    alt=""
                    className='logo'
                />
            </ScrollAnimation>

            <div className='is-flex AboutSection-ImageWrapper'
                 style={{
                     justifyContent: 'center',
                 }}>
                <figure className="image is-192x192">
                    <AboutSectionImage />
                </figure>
            </div>


            <div
                className='AboutSection-TextWrapper'
                dangerouslySetInnerHTML={{ __html: text }}
            />

            <div className='AboutSection-LinksWrapper'>
                <p className='title is-6 is-uppercase has-text'>Kontakt</p>

                <a href="mailto:eliaszsliz@hotmail.com">
                    eliaszsliz@hotmail.com
                </a>
            </div>

    </div>
)

const AboutSectionImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "mojatwarz.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
    />}
  />
)