import React from 'react'

// Animation
import { AttentionSeeker , Fade } from 'react-awesome-reveal';

// Data
import HomeObj from '../../data/home';

const Features = () => {

    const features = HomeObj.features;

    return (
        <section className='features'>
            <AttentionSeeker effect='rubberBand' triggerOnce>
                <h1>{features.headline}</h1>
            </AttentionSeeker>
            <div className="features-list">
                {features.list.map(feature => (
                    <Fade direction='left' key={feature.id} delay={300} triggerOnce>
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
