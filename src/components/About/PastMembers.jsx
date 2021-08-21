import React from 'react';

// Animation
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

// Data
import AboutObj from '../../data/about';

const PastMembers = () => {

    const pastMembers = AboutObj.pastMembers;

    return (
        <section className="past-members">
            <Bounce down delay={200}>
                <h1>{pastMembers.headline}</h1>
            </Bounce >

            <div className="years">
                {pastMembers.years.reverse().map(year => (
                    <Fade left key={year.year} delay={700}>
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

export default PastMembers
