import React from 'react'

// Animation
import { AttentionSeeker , Fade } from 'react-awesome-reveal';


// Images
import { ReactComponent as Quote } from '../../assets/home/quote.svg';

// Data
import HomeObj from '../../data/home';

const Testimonials = () => {

    const testimonials = HomeObj.testimonials;

    return (
        <section className='testimonials'>
            <AttentionSeeker effect='rubberBand' triggerOnce>
                <h1>{testimonials.headline}</h1>
            </AttentionSeeker>
            <div className="testimonials-list">
                {testimonials.list.map(testimonial => (
                    <Fade direction='left' key={testimonial.id} delay={300} triggerOnce>
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
