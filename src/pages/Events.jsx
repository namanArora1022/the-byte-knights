import React from 'react';

// Animation
import RubberBand from 'react-reveal/RubberBand';

// Data
import EventsObj from '../data/events';

// Components
import ActiveEvents from '../components/Event/ActiveEvents';
import PastEvents from '../components/Event/PastEvents';

const Events = () => {

    return (
        <section className='Events'>
            <RubberBand delay={300}>
                <h1>&lt;{EventsObj.headline}/&gt;</h1>
            </RubberBand>

            <ActiveEvents/>
            <PastEvents/>            
        </section>
    )
}

export default Events;
