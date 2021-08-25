import React from 'react';

// Animation
import { AttentionSeeker } from 'react-awesome-reveal';

// Data
import EventsObj from '../data/events';

// Components
import ActiveEvents from '../components/Event/ActiveEvents';
import PastEvents from '../components/Event/PastEvents';

const Events = () => {

    return (
        <section className='Events'>
            <AttentionSeeker delay={300} effect='rubberBand' triggerOnce>
                <h1 className='heading'>&lt;{EventsObj.headline}/&gt;</h1>
            </AttentionSeeker>

            <ActiveEvents/>
            <PastEvents/>            
        </section>
    )
}

export default Events;
