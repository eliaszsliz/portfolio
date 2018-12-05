import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import TechnologiesSection from '../components/TechnologiesSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

import data from '../data';

import '../../sass/app.sass';

const locale = 'pl';
const technologies = data[locale].TECHNOLOGIES;
const projects = data[locale].PROJECTS;
const contact = data[locale].CONTACT;
const info = data[locale].INFORMATIONS;

const IndexPage = () => (
  <>
    {/*<Navbar />*/}

    <Helmet title='Eliasz Śliż'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Junior Frontend Developer" />
        <meta property="og:url" content="eliaszsliz.pl" />
        <meta property="og:image" content="http://eliaszsliz.pl/images/mojryj.jpg" />
        <meta property="profile:first_name" content="Eliasz" />
        <meta property="profile:last_name" content="Śliż" />
    </Helmet>

    <div className='columns is-gapless' style={{ marginBottom: 0 }}>
        <div className='column is-flex is-5'
             style={{
                minHeight: '100vh'
            }}>

                <AboutSection
                  text={info.text}
                  imageSrc={info.imageSrc}
                />
        </div>

        <div className='column is-7'>
            <TechnologiesSection
                items={technologies}
            />

            <ProjectsSection
                items={projects}
            />

            <ContactSection
                email={contact.email}
                name={contact.name}
            />

            <Footer />
        </div>
    </div>
    </>
)

export default IndexPage
