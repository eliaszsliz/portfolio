import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import '../../sass/ContactSection.sass'

import {withPrefix} from "../../.cache/gatsby-browser-entry";

const ContactSection = ({ email, name }) => (

   <div className='ContactSection'>
        <h2 className='title is-1 has-text-centered is-marginless'>
            <span className='separator'>Kontakt</span>
        </h2>

       <div className='ContactSection-TextWrapper has-text-centered'>
           <div className='is-flex' style={{ justifyContent: 'center' }}>
               <ScrollAnimation
                   animateIn='swing'
                   animateOnce={true}
                   initiallyVisible={true}
                   delay={1200}
               >
                   <figure className='image is-64x64'>
                       <img src={withPrefix('/icons/mail.svg')} alt="Mail icon"/>
                   </figure>
               </ScrollAnimation>
           </div>

            <p className='name'>{ name }</p>

            <a href="mailto:eliaszsliz@hotmail.com"
                className='email has-text-primary'
             >{ email }</a>

           <ScrollAnimation
                   animateIn='fadeInUp'
                   animateOnce={true}
                   delay={100}
                   offset={0}
               >
               <p className='cv'
                  style={{  marginTop: '2rem'}}
                  >
                  Zapraszam również do zapoznania się z
                <a  href={withPrefix('/docs/cv.pdf')} download
                    className='button is-primary is-medium is-rounded'
                    style={{ marginLeft: '.5rem'}}>
                    moim CV
                </a>
                </p>
           </ScrollAnimation>
       </div>
    </div>
)

export default ContactSection