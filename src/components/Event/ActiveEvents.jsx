import React from 'react';

// Data
import EventsObj from '../../data/events';

// Animation
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

// Components
import Event from './ActiveEvent';

const ActiveEvents = () => {

    const activeEvents = EventsObj.activeEvents;

    return (
        <div className='active-events events-section'>
            <Bounce left delay={600}>
                <h2>{EventsObj.activeEventsHeading}</h2>
            </Bounce>
            {activeEvents && !activeEvents.length &&
                <div className="no-event">
                    <Fade left delay={1000}>
                        <h3 className='no-events'>No Events right now 😥</h3>
                    </Fade>
                </div>
            }
            {activeEvents &&
                <div className="events-list">
                    {activeEvents.map(event => (
                        <Fade left key={event.id} delay={700}>
                            <Event event={event} />
                        </Fade>
                    ))}
                </div>
            }
        </div>
    )
}

export default ActiveEvents;
