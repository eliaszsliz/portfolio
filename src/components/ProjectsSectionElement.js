import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { withPrefix } from 'gatsby'

const ProjectsSectionElement = ({
                                    title, items, color, textColor, images, bgColor, description,
                                    thumbnailUrl, sourceUrl, technologiesStack, thumbnail
                                }) => {

    function renderItem(item, index) {
        return (
            <ScrollAnimation
                   key={title + item.name}
                   animateIn='fadeInUp'
                   duration={.6}
                   animateOnce={true}
                   delay={50 * (index + 1)}
                   offset={50}
               >
                <div
                    style={{margin: '12px', padding: '12px'}}
                >
                    <figure className="image">
                        <img
                            src={withPrefix(item.iconUrl)}
                            alt={`${item.name} icon`}
                        />
                    </figure>
                </div>
            </ScrollAnimation>)
    }

    let stackItems = technologiesStack.slice(0, technologiesStack.length - 2).map(renderItem)

    if (technologiesStack.length > 2) {
        const techStackLength = technologiesStack.length

        stackItems.push(
            <div className='is-flex' key='twop'>
                { renderItem(technologiesStack[techStackLength - 1], techStackLength - 1) }
                { renderItem(technologiesStack[techStackLength - 2], techStackLength - 2) }
            </div>
        )
    }

    const Stack = (
        <div className='is-flex ProjectsSectionElement-Stack'>
            {stackItems}
        </div>
    )

    return (
        <div className='ProjectsSectionElement'
             style={{color: 'rgba(255, 255, 255, .95)', background: bgColor}}>

            <div className='ProjectsSectionElement-ImageWrapper'>
                { thumbnail }
            </div>

            <div className='ProjectsSectionElement-TextWrapper'>
                <h3 className='title'>{title}</h3>

                <p>{description}</p>

                {Stack}
            </div>
        </div>
    )
}


export default ProjectsSectionElement