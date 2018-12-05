import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../sass/ProjectsSection.sass'
import ProjectsSectionElement from '../components/ProjectsSectionElement'

const ProjectsSection = ({items}) => {
    const studia = Object.assign({},
        items[0],
        { thumbnail: (
            <img
                src={items[0].images[1]}
                className='ProjectsSectionElement-Image'
                alt="Studia mockup on ipad"
                style={{ maxWidth: '250px' }}
            />
            )
        })

    const zagorz = Object.assign({},
        items[1],
        { thumbnail: (
                <img
                    src={items[1].images[0]}
                    className='ProjectsSectionElement-Image'
                    alt="Zagórz mocukp on desktop"
                    style={{ maxWidth: '400px' }}
                />
            )
        })

    return (
        <div
            className='ProjectsSection'
            style={{ backgroundColor: studia.bgColor }}>

            <ScrollAnimation
                   animateIn='fadeInUp'
                   animateOnce={true}
                   delay={100}
                >
                <h1 className='title is-1 has-text-centered is-marginless'>
                    <span className='separator'>Projekty</span>
                </h1>
            </ScrollAnimation>

            <ProjectsSectionElement {...studia} />

            <ProjectsSectionElement {...zagorz} />
        </div>
    )

}


export default ProjectsSection