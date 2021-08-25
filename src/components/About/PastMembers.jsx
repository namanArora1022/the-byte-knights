import React from 'react';

// Animation
import { Bounce , Fade } from "react-awesome-reveal";

// Data
import AboutObj from '../../data/about';

const PastMembers = () => {

    const pastMembers = AboutObj.pastMembers;

    return (
        <section className="past-members">
            <Bounce direction='down' delay={200} triggerOnce>
                <h1>{pastMembers.headline}</h1>
            </Bounce >

            <div className="years">
                {pastMembers.years.reverse().map(year => (
                    <Fade direction='left' key={year.year} delay={700} triggerOnce>
                        <div className="year shadow">
                            <h2>{year.year}</h2>
                            <div className="member">
                                <h3>{year.President}</h3>
                                <h4>President</h4>
                            </div>
                            <div className="member">
                                <h3>{year.Vice_President}</h3>
                                <h4>Vice President</h4>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    )
}

export default PastMembers;
