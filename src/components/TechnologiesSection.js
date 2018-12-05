import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../sass/TechnologiesSection.sass'
import {withPrefix} from "gatsby";

const TechnologiesSection = ({items}) => {
    function renderItem(item, index) {
        return (
            <ScrollAnimation
                   key={item.name}
                   animateIn='fadeInUp'
                   animateOnce={true}
                   delay={150 * (index + 1)}
                   offset={0}
               >
                <div
                    style={{margin: '12px', padding: '12px'}}

                >
                    <figure className="image">
                        <img
                            src={withPrefix(item.thumbnailUrl)}
                            alt={`${item.name} icon`}
                        />
                    </figure>
                </div>
            </ScrollAnimation>)
    }

    let itemsToRender = items.slice(0, items.length - 2).map(renderItem)

    if (items.length > 2) {
        const itemsLength = items.length

        itemsToRender.push(
            <div className='is-flex' key='twot'>
                { renderItem(items[itemsLength - 1], itemsLength - 1) }
                { renderItem(items[itemsLength - 2], itemsLength - 2) }
            </div>
        )
    }

    return (
        <div id='TechnologiesSection'>
                <ScrollAnimation
                   animateIn='shortFadeInUp'
                   animateOnce={true}
                   delay={100}
                >
                    <h1 className='title is-1 has-text-centered'>
                        <span className='separator'>
                            Technologie
                        </span>
                    </h1>
                </ScrollAnimation>

                <div
                    className='is-flex TechnologiesSection-List'
                >
                    {itemsToRender}
                </div>

        </div>
    )

}


export default TechnologiesSection