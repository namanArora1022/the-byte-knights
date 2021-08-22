import React from 'react'

// Animation
import Bounce from 'react-reveal/Bounce';

// Data
import AboutObj from '../../data/about';

const Landing = () => {

    const main = AboutObj.main;

    return (
        <main>
            <Bounce left cascade delay={200}>
                <div className="content">
                    <h1>&lt;{main.headline}/&gt;</h1>
                    <p>{main.para1}</p>
                    <br />
                    <p>
                        {main.para2Heading}
                        <br />
                        {main.para2}
                    </p>
                </div>
            </Bounce>
        </main>
    )
}

export default Landing;
