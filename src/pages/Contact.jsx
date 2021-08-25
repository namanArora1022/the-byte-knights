import React from 'react';

// Animation
import { Fade } from 'react-awesome-reveal';

// Images
import contactSvg from '../assets/contact.svg';

// Data 
import contactObj from '../data/contact';

function Contact() {
    return (
        <div className='Contact'>
            <main>
                <Fade direction='left' triggerOnce>
                    <div className="left">
                        <h1>{contactObj.headline}</h1>
                        <h4><span>{contactObj.email.p1}</span>{contactObj.email.p2}</h4>
                        <img src={contactSvg} alt="" />
                    </div>
                </Fade>
                <Fade direction='up' triggerOnce>
                    <div className="right">
                        {/* fb */}
                        <a href="https://www.facebook.com/profile.php?id=100069116769192" target="_blank" rel="noreferrer">
                            <div className="icon">
                                <svg fill="#ff0054" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.06,11.987a10.061,10.061,0,1,0-11.633,9.939V14.9H7.872V11.987h2.555V9.771a3.551,3.551,0,0,1,3.8-3.915,15.427,15.427,0,0,1,2.252.2V8.529H15.211a1.454,1.454,0,0,0-1.64,1.571v1.887h2.791L15.915,14.9H13.571v7.03A10.064,10.064,0,0,0,22.06,11.987Z"></path></svg>
                            </div>
                        </a>
                        {/* insta */}
                        <a href="https://www.instagram.com/thebyteknights/" target="_blank" rel="noreferrer">
                            <div className="icon">
                                <svg fill="#ff0054" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3.8c2.67,0,2.986.01,4.041.058A5.552,5.552,0,0,1,17.9,4.2a3.31,3.31,0,0,1,1.9,1.9,5.552,5.552,0,0,1,.344,1.857C20.188,9.014,20.2,9.33,20.2,12s-.01,2.986-.058,4.041A5.552,5.552,0,0,1,19.8,17.9a3.31,3.31,0,0,1-1.9,1.9,5.552,5.552,0,0,1-1.857.344c-1.054.048-1.371.058-4.041.058s-2.987-.01-4.041-.058A5.552,5.552,0,0,1,6.1,19.8a3.31,3.31,0,0,1-1.9-1.9,5.552,5.552,0,0,1-.344-1.857C3.812,14.986,3.8,14.67,3.8,12s.01-2.986.058-4.041A5.552,5.552,0,0,1,4.2,6.1,3.31,3.31,0,0,1,6.1,4.2,5.552,5.552,0,0,1,7.959,3.86C9.014,3.812,9.33,3.8,12,3.8M12,2c-2.716,0-3.056.012-4.123.06a7.355,7.355,0,0,0-2.427.465A5.106,5.106,0,0,0,2.525,5.45,7.355,7.355,0,0,0,2.06,7.877C2.012,8.944,2,9.284,2,12s.012,3.056.06,4.123a7.355,7.355,0,0,0,.465,2.427A5.106,5.106,0,0,0,5.45,21.475a7.355,7.355,0,0,0,2.427.465C8.944,21.989,9.284,22,12,22s3.056-.011,4.123-.06a7.355,7.355,0,0,0,2.427-.465,5.106,5.106,0,0,0,2.925-2.925,7.355,7.355,0,0,0,.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123a7.355,7.355,0,0,0-.465-2.427A5.106,5.106,0,0,0,18.55,2.525a7.355,7.355,0,0,0-2.427-.465C15.056,2.012,14.716,2,12,2Z"></path><path d="M12,6.865A5.135,5.135,0,1,0,17.135,12,5.135,5.135,0,0,0,12,6.865Zm0,8.468A3.333,3.333,0,1,1,15.333,12,3.333,3.333,0,0,1,12,15.333Z"></path><circle cx="17.338" cy="6.662" r="1.2"></circle></svg>
                            </div>
                        </a>
                        {/* youtube */}
                        <a href="https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA" target="_blank" rel="noreferrer">
                            <div className="icon">
                                <svg fill="#ff0054" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.062,6.927A2.631,2.631,0,0,0,20.234,5.1c-1.637-.439-8.224-.439-8.224-.439S5.439,4.652,3.785,5.1A2.631,2.631,0,0,0,1.957,6.927,27.322,27.322,0,0,0,1.5,12.009a27.287,27.287,0,0,0,.456,5.062A2.631,2.631,0,0,0,3.785,18.9c1.635.44,8.225.44,8.225.44s6.57,0,8.224-.44a2.631,2.631,0,0,0,1.828-1.827,27.364,27.364,0,0,0,.438-5.062A27.406,27.406,0,0,0,22.062,6.927ZM9.907,15.152v-6.3l5.483,3.153Z"></path></svg>
                            </div>
                        </a>
                    </div>
                </Fade>
                <div className="bg-rect"></div>
            </main>
            <section className="maps">
                <Fade direction='up' triggerOnce>
                    <h1>Here we are 🙋🏻‍♂️</h1>
                </Fade>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9513088873964!2d77.09168411508256!3d28.631221382418328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bc15555555%3A0xc67001beb4b7d7fa!2sMira%20Model%20School!5e0!3m2!1sen!2sin!4v1629201889498!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="mira model school"></iframe>
            </section>
        </div>
    )
}

export default Contact;
