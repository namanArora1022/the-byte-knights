import React from 'react'

// Animation
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

// Images
import { ReactComponent as Quote } from '../../assets/home/quote.svg';

// Data
import HomeObj from '../../data/home';

const Testimonials = () => {

    const testimonials = HomeObj.testimonials;

    return (
        <section className='testimonials'>
            <RubberBand>
                <h1>{testimonials.headline}</h1>
            </RubberBand>
            <div className="testimonials-list">
                {testimonials.list.map(testimonial => (
                    <Fade left key={testimonial.id} delay={300}>
                        <div className="testimonial shadow">
                            <Quote />
                            <p>{testimonial.text}</p>
                            <h3>{testimonial.name}</h3>
                            <h5>{testimonial.standard}</h5>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    )
}

export default Testimonials;
