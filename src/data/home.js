import Coding from '../assets/work.svg';
import Video from '../assets/features/video.svg';
import Photo from '../assets/features/photo.svg';
import Quiz from '../assets/features/quiz.svg';
import Design from '../assets/features/design.svg';

const HomeObj = {
    main: { 
        headline: `The Byte Knights`
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
    }
}

export default HomeObj;