import React from 'react'

const PastEvents = ({ event }) => {
    return (
        <div className="event" key={event.id}>
            <img src={event.img} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.body}</p>
            <button>
                <a href={event.reportLink} target="_blank" rel="noreferrer">Read More</a>
            </button>
        </div>
    )
}

export default PastEvents;
