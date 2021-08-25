import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Animation
import { Fade } from 'react-awesome-reveal';

const Guidelines = ({ event }) => {

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        if (event) {
            fetch(event.markdown).then(res => res.text()).then(text => {
                setMarkdown(text);
            })
        }
    }, [event]);

    return (
        <section className='guidelines'>
            <Fade direction='left' triggerOnce>
                <h2>Competition Guidelines</h2>
            </Fade>
            <div className='guidelines-list'>
                <Fade direction='left' triggerOnce>
                    {markdown && <ReactMarkdown children={markdown} />}
                </Fade>
            </div>
        </section>
    )
}

export default Guidelines;
