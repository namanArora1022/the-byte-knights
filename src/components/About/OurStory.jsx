import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

// Data
import AboutObj from '../../data/about';

// Timeline component
import { ReactComponent as WorkIcon } from '../../assets/home/work.svg';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

const OurStory = () => {

    const workIconStyles = {
        background: '#ff0054'
    }

    const timeline = AboutObj.timeline;

    const timelineElements = timeline.timelineElements;

    return (
        <Fade up delay={500}>
            <section className="our-story">
                <h1>{timeline.headline}</h1>
                <VerticalTimeline>
                    {timelineElements.map(element => {
                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                dateClassName='date'
                                iconStyle={workIconStyles} // css
                                icon={<WorkIcon />}
                            >

                                <h3 className='vertical-timeline-element-title'>
                                    {element.title}
                                </h3>

                                <p className="description">{element.description}</p>

                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </section>
        </Fade>
    )
}

export default OurStory;
