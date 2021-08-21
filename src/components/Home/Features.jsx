import React from 'react'

// Animation
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

// Data
import HomeObj from '../../data/home';

const Features = () => {

    const features = HomeObj.features;

    return (
        <section className='features'>
            <RubberBand>
                <h1>{features.headline}</h1>
            </RubberBand>
            <div className="features-list">
                {features.list.map(feature => (
                    <Fade left key={feature.id} delay={300}>
                        <div className="feature">
                            <img src={feature.img} alt={feature.name} />
                            <h3>{feature.name}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    )
}

export default Features;
