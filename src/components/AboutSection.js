import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import '../../sass/AboutSection.sass'

const AboutSection = ({ text, imageSrc }) => (
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
                    <img className="is-rounded" src={imageSrc} />
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

export default AboutSection