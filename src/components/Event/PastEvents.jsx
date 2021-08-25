import React from 'react';

// Components
import PastEvent from './PastEvent';

// Animation
import { Fade , Bounce } from "react-awesome-reveal";

// Data
import EventsObj from '../../data/events';

const PastEvents = () => {

    const pastEvents = EventsObj.pastEvents;

    return (
        <div className='past-events events-section'>
            <Bounce direction='left' delay={600} triggerOnce>
                <h2>{EventsObj.pastEventsHeading}</h2>
            </Bounce>
            {pastEvents &&
                <div className="events-list">
                    {pastEvents.map(event => (
                        <Fade direction='left' key={event.id} delay={700} triggerOnce>
                            <PastEvent event={event} />
                        </Fade>
                    ))}
                </div>
            }
        </div>
    )
}

export default PastEvents;
