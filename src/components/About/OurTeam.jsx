import React from 'react';

// Animation
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

// Data
import AboutObj from '../../data/about';

const OurTeam = () => {

    const ourTeam = AboutObj.ourTeam;

    return (
        <section className="our-team">
            <Bounce down delay={200}>
                <h1>{ourTeam.headline}</h1>
                <p>
                    <span>{ourTeam.para.p1}</span>
                    <span>{ourTeam.para.p2}</span>
                </p>
            </Bounce>
            <div className="members">
                {ourTeam.members.map(member => (
                    <Fade left key={member.id} delay={700}>
                        <div className="member shadow">
                            <figure>
                                <img src={member.img} alt={member.name} />
                            </figure>
                            <h3>{member.name}</h3>
                            <h5>{member.post}</h5>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    )
}

export default OurTeam;
