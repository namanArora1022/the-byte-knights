// 2021
import Social_Debate from '../assets/events/2021/Social Debate.jpg';
import Lets_Code from '../assets/events/2021/Lets Code.jpg';
import Made_To_Mingle from '../assets/events/2021/Made To Mingle.jpg';
import Space_Monk from '../assets/events/2021/Space Monk.jpg';
import Magic_Paint from '../assets/events/2021/Magic Paint.jpg';
import Fathers_Day from '../assets/events/2021/Fathers Day.jpg';

/* 
! Active Event

{
id: 1,
title: `Made To Mingle`,
img: Made_To_Mingle,
description: `In this event, students have to make a power point presentation (ppt).2. Topics were given on the spot to the participants and time was given to them from 10 a.m. to 11:30 a.m 3. Topics of the competition were:-● On the occasion of International Yoga Day, which was on 21st June, 2021 we gave the topic as "The benefits of Yoga" ● On the occasion of Environment day which was on 5th June, 2021 we gave the topic as "Environment" All the participants have to make a ppt on either of one topic.`,
heads: [
    {
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ZgwEAx_I1bylIJ7GrYM9sAHaHa%26pid%3DApi&f=1',
        name: 'Naman Arora',
        phone: '+91 123456789'
    },
    {
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ZgwEAx_I1bylIJ7GrYM9sAHaHa%26pid%3DApi&f=1',
        name: 'Kashvi Arora',
        phone: '+91 123456789'
    },
],
guidelines: [
    `Competition Guidelines Eligibility: Classes VI-XII`,
    `Only 1 photograph per participant is allowed. All photographs should be submitted along with short captions (1-2 sentences).`,
    `There is no limit to the number of participants from a school.`,
    `Entries to be submitted through Google Forms. The last date to submit the photographs is Wednesday, 14 July 2021 by 5:00 PM.`,
    `The participants must provide the following during the time of submission:`,
    `Name of School`,
    `Name of Participant`,
    `Class studying in`,
    `Email Id`,
    `Instagram Handle (Optional)`,

    `Plagiarism is strictly prohibited and will lead to disqualification.`,
    `The participants must provide the original photograph along with the edited version. The edited version will be used as the official entry. The original photograph must be named ‘Original’ and the edited version must be named ‘Final’.`,
    `Editing should be confined to colour and basic exposure. Adding external elements like rain, fog, sun, etc to the photograph during editing is strictly prohibited. The addition of such elements will lead to disqualification of the participant.`
],
formLink: 'https://forms.gle/963Qt8gYgsrZPQbE9',
}

Todo: Channel spefic link is possible for each event
*/

const EventsObj = {
    headline: 'Events',
    activeEventsHeading: 'Active Events',
    pastEventsHeading: 'Past Events',
    activeEvents: [],
    pastEvents: [
        {
            id: 1,
            title: 'Social Debate',
            img: Social_Debate,
            body: `Description of the competition:-
        and had an opinion to ban these apps. There were two teams:Team A and
        Team A had 3 participants and it was a
        SOCIAL MEDIA team where they talked
        about Instagram, Twitter and Facebook
        ban and oppose the decision taken by
        the government to ban these apps\n
        Team B had 2 participants and it was a
        government team who opposed team A .`,
            reportLink: 'https://drive.google.com/file/d/1DtvO1YUomksaxBfErDiB6IMtUGgvWekl/view?usp=sharing'
        },
        {
            id: 2,
            title: `Let's Code`,
            img: Lets_Code,
            body: `In this event, students have to
        make a website using HTML.
        2. Topics were given on the spot
        to the participants and 4 days
        were given to them to submit
        their work.Topics of the competition were
        HERITAGE OF INDIA,
        RESTAURANTS,
        SPORTS,
        ONLINE EDUCATION,
        All the participants have to make the
        frontend of the website on either of one
        topic.`,
            reportLink: 'https://drive.google.com/file/d/1mgKklo3AXWlIZtR5IKjxJaCU0jYlTSum/view?usp=sharing'
        },
        {
            id: 3,
            title: `Made To Mingle`,
            img: Made_To_Mingle,
            body: `In this event, students have to
        make a power point presentation
        (ppt).
        2. Topics were given on the spot to the
        participants and time was given to
        them from 10 a.m. to 11:30 a.m
        3. Topics of the competition were:-
        ● On the occasion of International
        Yoga Day, which was on 21st June,
        2021 we gave the topic as
        "The
        benefits of Yoga
        "
        ● On the occasion of Environment
        day which was on 5th June, 2021 we
        gave the topic as
        "Environment"
        All the participants have to make a ppt on
        either of one topic.`,
            reportLink: 'https://drive.google.com/file/d/119thjnL43iuX48bw7cdLi-47Awvd1_fs/view?usp=sharing'
        },
        {
            id: 4,
            title: `Space Monk`,
            img: Space_Monk,
            body: `This event was a gaming competition in
        which the participants had to play
        "Among us
        "
        ,the popular game.
        ● There were a total of 3 rounds for the
        selection and the one who win in all the
        rounds will win the game.
        ● Some basic game criteria:- IMPOSTER-2
        PLAYERS-15
        MAP-SKELD
        SERVER-ASIA`,
            reportLink: 'https://drive.google.com/file/d/1ObGkQVR5t2uM4bIbLfmieDwfQJFg4tbr/view?usp=sharing'
        },
        {
            id: 5,
            title: `Magic  Painting`,
            img: Magic_Paint,
            body: `In this event, the participants made
        a drawing using Ms Paint on their
        computer systems.
        - The topic was given to them as
        "Solar system
        ".
        - Topic was given on the spot to the
        participants and time was given to
        them from 10 a.m. to 10:45 a.m.`,
            reportLink: 'https://drive.google.com/file/d/1jvqX6Hx92LRmBPUROsqUlB_h2W7lejTW/view?usp=sharing'
        },
        {
            id: 6,
            title: 'Fathers Day',
            img: Fathers_Day,
            body: `In this event, students made an E-card for their father and attached the best picture clicked by them of their father in the E-card. 
            The students made the E-Card from different applications on their devices. 
            The students made the E-Card on the spot, time was given to them from 10 a.m. to 11:30 a.m.`,
            reportLink: 'https://drive.google.com/file/d/1RoZeuAofzyZKTfaY7fdDGG2SntgR3NGh/view?usp=sharing'
        },
    ],
    discord: {
        headline: `Join us on Discord`,
        para1: `Common join us on discord , we will clear all of your queries regarding the events you are participating in.`,
        para2: `All the best 👍🏻`,
        btnText: 'Join now',
        // Todo add a link
        // https://discord.gg/f6vUxUKphU not this one
        link: 'https://discord.gg/f6vUxUKphU'
    }
}

export default EventsObj;