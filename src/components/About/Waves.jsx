import React from 'react';

// Images
import { ReactComponent as PinkWave } from '../../assets/about/pink-wave.svg';
import { ReactComponent as YellowWave } from '../../assets/about/yellow-wave.svg';

const Waves = () => {
    return (
        <section className="waves">
            <PinkWave className='wave' />
            <YellowWave className='wave' />
        </section>
    )
}

export default Waves;
