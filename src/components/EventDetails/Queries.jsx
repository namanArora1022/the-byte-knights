import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

// Data
import EventsObj from '../../data/events';

// Images
import { ReactComponent as Chatting } from '../../assets/chatting.svg';

const Contact = () => {

    const discord = EventsObj.discord;

    return (
        <a name='queries'>
            <section className='queries'>
                <Fade left delay={600}>
                    <div className="left">
                        <h2>{discord.headline}</h2>
                        <p>{discord.para1}</p>
                        <p>{discord.para2}</p>
                        <a href={discord.link} target='_blank' rel="noreferrer">{discord.btnText}</a>
                    </div>
                </Fade>
                <div className="right">
                    <Fade right delay={600}>
                        <Chatting />
                    </Fade>
                </div>
            </section>
        </a>
    )
}

export default Contact;
