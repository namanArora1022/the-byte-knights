import React from 'react';

// Components
import Landing from '../components/About/Landing';
import OurStory from '../components/About/OurStory';
import OurTeam from '../components/About/OurTeam';
import PastMembers from '../components/About/PastMembers';
import Waves from '../components/About/Waves';

function About() {
    return (
        <div className='About'>
            <Landing/>
            <OurStory/>            
            <OurTeam/>
            <PastMembers/>
            <Waves/>
        </div>
    )
}

export default About;
