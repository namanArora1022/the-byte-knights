import React, { useState, useEffect } from 'react';

// Images
import timeSvg from '../assets/time.svg';

// Data
import ResultsObj from '../data/results';

// Animation
import RubberBand from 'react-reveal/RubberBand';
import Wobble from 'react-reveal/Wobble';
import Fade from 'react-reveal/Fade';

const Results = () => {

    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    const [result_delcared, set_result_delcared] = useState(false);

    function countdown() {
        const lastupdateTime = new Date(ResultsObj.date).getTime()
        const now = new Date().getTime();

        const gap = -(now - lastupdateTime);

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        setDay(textDay)
        setHour(textHour);
        setMinute(textMinute);
        setSecond(textSecond);
    }

    useEffect(() => {
        let id = setInterval(countdown, 1000)

        if (hour <= 0 && minute <= 0 && second <= 0 && day <= 0) {
            clearInterval(id)
            set_result_delcared(true);
        }
    }, [hour, minute, second, day])

    return (
        <div className='Results'>
            {result_delcared &&
                <section className='result'>
                    <RubberBand>
                        <h1>&lt;{ResultsObj.headline} /&gt;</h1>
                    </RubberBand>
                    <Wobble>
                        <div className="youtube-video">
                            <iframe width="706" height="397" src="https://www.youtube.com/embed/PTu-QFp-9HA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Wobble>
                </section>
            }
            {!result_delcared &&
                <section className='comming-soon'>
                    <RubberBand>
                        <h1>{ResultsObj.commingSoonHeading}</h1>
                    </RubberBand>
                    <Wobble>
                        <div className="countdown">
                            <div>
                                <h2>{day}</h2>
                                <h3>Days</h3>
                            </div>
                            <div>
                                <h2>{hour}</h2>
                                <h3>Hours</h3>
                            </div>
                            <div>
                                <h2>{minute}</h2>
                                <h3>Minutes</h3>
                            </div>
                            <div>
                                <h2>{second}</h2>
                                <h3>Seconds</h3>
                            </div>
                        </div>
                    </Wobble>
                    <Fade up>
                        <img src={timeSvg} alt="comming soon" />
                    </Fade>
                </section>
            }
        </div>
    )
}

export default Results;
