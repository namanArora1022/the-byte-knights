import React from 'react';

// Data
import EventsObj from '../../data/events';

// Animation
import { Slide , Bounce } from "react-awesome-reveal";

// Components
import Event from './ActiveEvent';

const ActiveEvents = () => {

    const activeEvents = EventsObj.activeEvents;

    return (
        <div className='active-events events-section'>
            <Bounce direction='left' delay={600} triggerOnce>
                <h2>{EventsObj.activeEventsHeading}</h2>
            </Bounce>
            {activeEvents && !activeEvents.length &&
                <div className="no-event">
                    <Slide direction='left' delay={1000} triggerOnce>
                        <h3 className='no-events'>No Events right now 😥</h3>
                    </Slide>
                </div>
            }
            {activeEvents &&
                <div className="events-list">
                    {activeEvents.map(event => (
                        <Slide direction='left' key={event.id} delay={1000} triggerOnce>
                            <Event event={event} />
                        </Slide>
                    ))}
                </div>
            }
        </div>
    )
}

export default ActiveEvents;
