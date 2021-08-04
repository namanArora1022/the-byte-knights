import React from 'react';

// Animation
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

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

    return (
        <div className='about'>
            <main>
                <Bounce left cascade>
                    <div className="content">
                        <h1>&lt;{AboutObj.main.headline}/&gt;</h1>
                        <p>{AboutObj.main.para1}</p>
                        <br />
                        <p>
                            {AboutObj.main.para2Heading}
                            <br />
                            {AboutObj.main.para2}
                        </p>
                    </div>
                </Bounce>
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
                <Bounce down>
                    <h1>{AboutObj.ourTeam.headline}</h1>
                    <p>
                        <span>{AboutObj.ourTeam.para.p1}</span>
                        <span>{AboutObj.ourTeam.para.p2}</span>
                    </p>
                </Bounce>
                <div className="members">
                    {AboutObj.ourTeam.members.map(member => (
                        <Fade left>
                            <div className="member" key={member.id}>
                                <img src={member.img} alt={member.name} />
                                <h3>{member.name}</h3>
                                <h5>{member.post}</h5>
                            </div>
                        </Fade>
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
