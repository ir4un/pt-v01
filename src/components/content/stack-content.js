import nodejsLogo from '../../assets/Images/nodejs.png';
import htmlLogo from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.png';
import javascriptLogo from '../../assets/images/js.png';
import javaLogo from '../../assets/images/java.png';
import pythonLogo from '../../assets/images/python.png';
import cppLogo from '../../assets/images/c++.png';
import gitLogo from '../../assets/images/git.png';
import tensorflowLogo from '../../assets/images/tf.png';
import reactLogo from '../../assets/images/react.png';
import rLogo from '../../assets/images/r.png';
import matlabLogo from '../../assets/images/matlab.png';

export const stackContent = {
    java: [
        {
            name: 'Java',
            desc: 'The first programming language I have ever touched, back in Form 4 in SMKSI. One of the Object Oriented Programming language I was introduced to. I continued learning it and improve in my Diploma and Degree studies',
            logo: javaLogo
        },
    ],
    nodejs: [
        {
            name: 'Node.js',
            desc: 'One of the most versatile programming languages and for some reason, not related with Java at all. I had to self-learn Node.js for my internship at Recite Labs to work with backend systems and work on React for clients.',
            logo: nodejsLogo
        },
    ],
    html: [
        {
            name: 'HTML',
            desc: 'The bread of all programming languages and where most programmers start their journey, my first experience was back in Form 5 in SMKSI where I had to develop a student management system, then had multiple assignments throughout my studies to develop various websites which includes a consultation website and then an E-Commerce website and many more.',
            logo: htmlLogo
        },
    ],
    css: [
        {
            name: 'CSS',
            desc: 'I guess you can say this is the butter for HTML, to make it look good and nice mmmm. Pretty nice stylesheet feature to make your website looks and has improved as SASS and SCSS',
            logo: cssLogo
        },
    ],
    javascript: [
        {
            name: 'JavaScript',
            desc: 'This is what gave birth to Node.JS which provides far more advanced features to be used alongside HTML and CSS. I would give this programming language a 10/10.',
            logo: javascriptLogo
        },
    ],

    python: [
        {
            name: 'Python',
            desc: 'Surprisingly this one I had to self-learn as well for my Degree which involves a lot of machine learning related development and Python is most well-known for that. You can do it with other programming languages but I prefer with Python.',
            logo: pythonLogo
        },
    ],
    cplusplus: [
        {
            name: 'C++',
            desc: 'I learnt during my Degree and had to develop a pretty funky CLI application. It can display a donut in string form.',
            logo: cppLogo
        },
    ],
    git: [
        {
            name: 'Git',
            desc: 'This is another thing that I had to self-learn which has helped a lot in my current coding career. It was a bit rough to get to used with the various commands at first, but after consistent use in internships at Recite Labs and Fusionex and assigments, I would say I have gotten good at it.',
            logo: gitLogo
        },
    ],
    tensorflow: [
        {
            name: 'TensorFlow',
            desc: 'An open-source machine learning framework I mostly used to train AI models especially for my final year project, Checkcar. The trained model was able to accept an input image of a car and accurately provide the model and the current price of the car.',
            logo: tensorflowLogo
        },
    ],
    react: [
        {
            name: 'React',
            desc: 'A framework I started using after self-learning Node.JS during my Recite Lab internship. I had to develop a dashboard for Recite Lab and but my internship ended before I could finish it. I had also used React to develop a website to present the FlashGuard chrome extension which was developed for the MelHack 2021 hackathon.',
            logo: reactLogo
        },
    ],
    r: [
        {
            name: 'R',
            desc: 'Holy sh*t!',
            logo: rLogo
        },
    ],
    matlab: [
        {
            name: 'MATLAB',
            desc: 'A software I used for a short amount of time for learning about computer vision and how it can be used to enhance and apply filters to images to potentially reveal interesting thins. I had developed a simple app using MatLab that can identify defects within different types of gloves.',
            logo: matlabLogo
        },
    ],
};

export const projectContent = {
    checkcar: [
        {
            name: 'Checkcar Website',
            desc: 'AI Powered Website to Identify and Retrieve Car Model Prices',
            logo: javaLogo
        },
    ],
    checkcar2: [
        {
            name: 'Checkcar Website',
            desc: 'AI Powered Website to Identify and Retrieve Car Model Prices',
            logo: [reactLogo, nodejsLogo, pythonLogo]
        },
    ],

};
