import Coding from '../assets/work.svg';
import Video from '../assets/features/video.svg';
import Photo from '../assets/features/photo.svg';
import Quiz from '../assets/features/quiz.svg';
import Design from '../assets/features/design.svg';

const HomeObj = {
    main: {
        headline1: 'The Byte Knights',
        headline2: 'To Live to Learn'
    },
    features: {
        headline: 'What we do',
        list: [
            {
                id: 1,
                name: 'Coding',
                img: Coding,
                description: 'We have a keen intrest in coding , software developmemnt  , websites and apps in general'
            },
            {
                id: 2,
                name: 'Video Editing',
                img: Video,
                description: `Video Editing is a demand of today's modern world ,we can alter and devlop amazing videos use video editing softwares`
            },
            {
                id: 3,
                name: 'Photography',
                img: Photo,
                description: `It is the story we failed to put into words.In Photography there is a reality so subtle that it becomes more real than reality.`
            },
            {
                id: 4,
                name: 'Quizzes',
                img: Quiz,
                description: 'We conduct various quizzes based on knowledge of computer applications, which develops a keen interest among students'
            },
            {
                id: 5,
                name: 'Graphic Designing',
                img: Design,
                description: 'Graphic Designing helps students to use their creative minds to devlop the various user interfaces and user experiences(UI/UX)'
            },
        ]
    },
    testimonials: {
        headline: 'Testimonials',
        list: [
            {
                id: 1,
                text: 'I, Himanshi Miglani, a student of grade 11-D had participated in the Social Debate organized by the Byte Knights Club. I spoke against the ban of social media. This competition taught me team work skills and helped me imrove my speaking skills. In all, it was a good experience.',
                name: 'Himanshi Miglani',
                standard: '11-D'
            },
            {
                id: 2,
                text: 'I, Lakshya Sharma, a student of grade 11-C had participated in the Social Debate organized by the Byte Knights Club. I spoke against the ban of social media. This competition helped me imrove my speaking skills and helped me increase my confidence in public speaking. In all, it was a good experience.',
                name: 'Lakshya Sharma',
                standard: '11-C'
            },
            {
                id: 3,
                text: 'Hello!‌Rohan Raj from class XI-D this side. I recently participated in a social debate organised by Byte knights club and spoke against the the topic of "social media ban". The competition over-all was enjoyable, memorable and also taught me alot new things regarding teamwork. Moreover, it was a great experience for me.',
                name: '‌Rohan Raj',
                standard: '11-D'
            }
        ]
    }
}

export default HomeObj;