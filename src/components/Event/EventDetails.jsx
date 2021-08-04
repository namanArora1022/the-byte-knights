import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

// Data
import EventsObj from '../../data/events';

const EventDetails = ({ match }) => {

    const id = match.params.id;

    const events = EventsObj.activeEvents;
    const event = events[id - 1];

    return (
        <div className='event-details'>
            {event &&
                <>
                    <div className="imgBox">
                        <Fade left>
                            <img src={event.img} alt={event.title} />
                        </Fade>
                    </div>
                    <div>
                        <Fade up cascade>
                            <h1>{event.title}</h1>
                            <p>{event.body}</p>
                            <a href={event.formLink}>
                                <button>
                                    Register Now
                                </button>
                            </a>
                        </Fade>
                    </div>
                </>
            }
        </div>
    )
}

export default EventDetails;
