import React from 'react';

// Components
import Landing from '../components/Home/Landing';
import Features from '../components/Home/Features';
import Testimonials from '../components/Home/Testimonials';

function Home() {
    return (
        <div className='Home'>
            <Landing />
            <Features />
            <Testimonials />
        </div>
    )
}

export default Home;
