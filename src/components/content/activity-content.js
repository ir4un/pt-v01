import melhack from '../../assets/images/activities/melhack.png';
import flashguard from '../../assets/images/activities/flashers.png';
import ci from '../../assets/images/activities/ci.png';
import devpost from '../../assets/images/activities/devpost.png';
import github from '../../assets/images/activities/github.png';
import utube from '../../assets/images/activities/youtube.png';
import hungry from '../../assets/images/activities/hungry.png';
import babg from '../../assets/images/activities/babg.png';

import insight from '../../assets/images/project-thumbnails/insight.png';

export const activityContent = [
    {
        name: 'FlashGuard - MelHack 2021',
        status: '2nd Place Winner!',
        desc: 'My very first hackathon that I participated in and managed to get 2nd place! Me and my friends managed to develop FLASHGUARD, a chrome extension that is able to give Netflix watchers warnings of epilepsy to prevent harmful media such as strobing or flashing lights to hurt people that are visually sensitive.',
        thumbnail: melhack,
        thumbIcon: flashguard,
        link: [
            { image: utube, url: 'https://youtu.be/co8DPTenr48?si=y6rMJVw0KFulJAiz' },
            { image: github, url: 'https://github.com/Diskordlit/FlashGuard/tree/FlashGuard-Chrome-Extension' },
            { image: devpost, url: 'https://devpost.com/software/flashguard' }

        ]
    },
    {
        name: 'ClassInsight Pro - Microsoft AI Classroom Hackathon 2023',
        status: 'Participated',
        desc: 'A browser extension that allows users to utilize the power of ChatGPT to ask questions related to videos on the Microsft Cloudpoint/Stream platform.',
        thumbnail: insight,
        thumbIcon: ci,
        link: [
            { image: utube, url: 'https://youtu.be/_PQHbRLQFLo?si=9R8Ixd5obZ391MXj' },
            { image: github, url: 'https://github.com/Diskordlit/ClassInsight' },
            { image: devpost, url: 'https://devpost.com/software/classinsight-pro' }


        ]
    },
    {
        name: 'BabyGhost Discord Bot - MelHack 2022',
        status: 'Participated',
        desc: 'A Discord Bot that interacts with students by providing motivational quotes, jokes, memes, word definitions and quizzes.',
        thumbnail: babg,
        thumbIcon: hungry,
        link: [
            { image: utube, url: 'https://youtu.be/Uhgf-dCwqRg?si=HD-hHUfIc3cQEXtd' },
            { image: github, url: 'https://github.com/Sia-WRWD/Baby-Ghost-MelbHack' },
            { image: devpost, url: 'https://devpost.com/software/baby-ghost' }


        ]
    },

];
