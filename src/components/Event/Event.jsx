import React from 'react';
import { Link } from "react-router-dom";

const Event = ({ event }) => {
    return (
        <div className="event" key={event.id}>
            <Link to={`/events/${event.id}`}>
                <img src={event.img} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.description.slice(0, 250) + '... '}</p>
            </Link>
        </div>
    )
}

export default Event;
