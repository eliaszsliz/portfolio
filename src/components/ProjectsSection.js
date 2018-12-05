import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../sass/ProjectsSection.sass'
import ProjectsSectionElement from '../components/ProjectsSectionElement'

import ZagorzImage from './Projects/ZagorzImage'
import StudiaImage from './Projects/StudiaImage'

const ProjectsSection = ({items}) => {
    const studia = items[0]
    const zagorz = items[1]

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

            <ProjectsSectionElement
                {...studia}
                thumbnail={<StudiaImage/>}
            />

            <ProjectsSectionElement
                {...zagorz}
                thumbnail={<ZagorzImage />}
            />
        </div>
    )
}

export default ProjectsSection