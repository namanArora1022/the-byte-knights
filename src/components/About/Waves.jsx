import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

// Images
import { ReactComponent as PinkWave } from '../../assets/about/pink-wave.svg';
import { ReactComponent as YellowWave } from '../../assets/about/yellow-wave.svg';

const Waves = () => {
    return (
        <section className="waves">
            <Fade up cascade delay={300}>
                <PinkWave className='wave' />
                <YellowWave className='wave' />
            </Fade>
        </section>
    )
}

export default Waves;
