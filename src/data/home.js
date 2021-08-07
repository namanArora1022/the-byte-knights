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
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia natus, iusto rem incidunt aut commodi tempora nesciunt cupiditate dignissimos earum'
            },
            {
                id: 2,
                name: 'Video Editing',
                img: Video,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia natus, iusto rem incidunt aut commodi tempora nesciunt cupiditate dignissimos earum'
            },
            {
                id: 3,
                name: 'Photography',
                img: Photo,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia natus, iusto rem incidunt aut commodi tempora nesciunt cupiditate dignissimos earum'
            },
            {
                id: 4,
                name: 'Quizzes',
                img: Quiz,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia natus, iusto rem incidunt aut commodi tempora nesciunt cupiditate dignissimos earum'
            },
            {
                id: 5,
                name: 'Graphic Designing',
                img: Design,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia natus, iusto rem incidunt aut commodi tempora nesciunt cupiditate dignissimos earum'
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