import React from 'react';

// Data
import EventsObj from '../data/events';

// Components
import Landing from '../components/EventDetails/Landing';
import Guidelines from '../components/EventDetails/Guidelines.jsx';
import Queries from '../components/EventDetails/Queries.jsx';
import NotFound from './NotFound.jsx';

const EventDetails = ({ match }) => {

    const id = match.params.id;

    const events = EventsObj.activeEvents;
    const event = events[id - 1];

    return (
        <div className='EventDetails'>
            {event ?
                <>
                    <Landing event={event}/>
                    <Guidelines event={event}/>
                    <Queries/>
                </> : <NotFound />
            }
        </div>
    )
}

export default EventDetails;
