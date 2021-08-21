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

// Images
import { ReactComponent as PinkWave } from '../assets/about/pink-wave.svg';
import { ReactComponent as YellowWave } from '../assets/about/yellow-wave.svg';

function About() {

    const workIconStyles = {
        background: '#ff0054'
    }

    const timelineElements = AboutObj.timeline.timelineElements;

    return (
        <div className='About'>
            <main>
                <Bounce left cascade delay={200}>
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
            <Fade up delay={500}>
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
            </Fade>
            <section className="our-team">
                <Bounce down delay={200}>
                    <h1>{AboutObj.ourTeam.headline}</h1>
                    <p>
                        <span>{AboutObj.ourTeam.para.p1}</span>
                        <span>{AboutObj.ourTeam.para.p2}</span>
                    </p>
                </Bounce>
                <div className="members">
                    {AboutObj.ourTeam.members.map(member => (
                        <Fade left key={member.id} delay={700}>
                            <div className="member">
                                <figure>
                                    <img src={member.img} alt={member.name} />
                                </figure>
                                <h3>{member.name}</h3>
                                <h5>{member.post}</h5>
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>
            <section className="past-members">
                <Bounce down delay={200}>
                    <h1>{AboutObj.pastMembers.headline}</h1>
                </Bounce >

                <div className="years">
                    {AboutObj.pastMembers.years.reverse().map(year => (
                        <Fade left key={year.year} delay={700}>
                            <div className="year">
                                <h2>{year.year}</h2>
                                <div className="member">
                                    <h3>{year.President}</h3>
                                    <h4>President</h4>
                                </div>
                                <div className="member">
                                    <h3>{year.Vice_President}</h3>
                                    <h4>Vice President</h4>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>
            <section className="waves">
                <Fade up cascade delay={300}>
                    <PinkWave className='wave' />
                    <YellowWave className='wave' />
                </Fade>
            </section>
        </div>
    )
}

export default About;
