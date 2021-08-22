import React from 'react';

// Components
import PastEvent from './PastEvent';

// Animation
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

// Data
import EventsObj from '../../data/events';

const PastEvents = () => {

    const pastEvents = EventsObj.pastEvents;

    return (
        <div className='past-events events-section'>
            <Bounce left delay={600}>
                <h2>{EventsObj.pastEventsHeading}</h2>
            </Bounce>
            {pastEvents &&
                <div className="events-list">
                    {pastEvents.map(event => (
                        <Fade left key={event.id} delay={700}>
                            <PastEvent event={event} />
                        </Fade>
                    ))}
                </div>
            }
        </div>
    )
}

export default PastEvents;
