import React, { useEffect } from 'react';

// Animation
import Aos from 'aos';

// Data
import AboutObj from '../data/about';

// Timeline component
import { ReactComponent as WorkIcon } from '../assets/work.svg';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

function About() {

    const workIconStyles = {
        background: '#ff0054'
    }

    const timelineElements = AboutObj.timeline.timelineElements;

    useEffect(() => {
        Aos.init({
            duration: 700,
        })
    }, [])

    return (
        <div className='about'>
            <main>
                <div className="content">
                    <h1 data-aos="fade-right">&lt;{AboutObj.main.headline}/&gt;</h1>
                    <p data-aos="fade-right" data-aos-delay="600">
                        {AboutObj.main.para1}
                    </p>
                    <br />
                    <p data-aos="fade-right" data-aos-delay="600">
                        {AboutObj.main.para2Heading}
                        <br />
                        {AboutObj.main.para2}
                    </p>
                </div>
            </main>
            <section className="timeline">
                <h1>{AboutObj.timeline.headline}</h1>
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
            <section className="our-team">
                <h1>{AboutObj.ourTeam.headline}</h1>
                <p>
                    <span>{AboutObj.ourTeam.para.p1}</span>
                    <span>{AboutObj.ourTeam.para.p2}</span>
                </p>
                <div className="members">
                    {AboutObj.ourTeam.members.map(member => (
                        <div className="member" key={member.id}>
                            <img src={member.img} alt={member.name} />
                            <h3>{member.name}</h3>
                            <h5>{member.post}</h5>
                        </div>
                    ))}
                </div>
            </section>
            {/* // TODO */}
            {/* <section className="waves">
                <div className='wave wave1'></div>
                <div className='wave wave2'></div>
            </section> */}
        </div>
    )
}

export default About;
