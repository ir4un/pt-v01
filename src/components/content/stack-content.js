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
            desc: 'A high-level programming language known for its platform independence and wide usage in building enterprise-level applications.',
            logo: javaLogo
        },
    ],
    nodejs: [
        {
            name: 'Node.js',
            desc: 'A popular and versatile language that is considered to be the forefront of modern web frameworks.',
            logo: nodejsLogo
        },
    ],
    html: [
        {
            name: 'HTML',
            desc: 'A markup language used for creating web pages and web applications.',
            logo: htmlLogo
        },
    ],
    css: [
        {
            name: 'CSS',
            desc: 'A style sheet language used for describing the presentation of a document written in HTML.',
            logo: cssLogo
        },
    ],
    javascript: [
        {
            name: 'JavaScript',
            desc: 'A programming language that enables interactive web pages and is an essential part of web development.',
            logo: javascriptLogo
        },
    ],

    python: [
        {
            name: 'Python',
            desc: 'An easy-to-learn programming language with a simple syntax, widely used for web development, data analysis, artificial intelligence, and more.',
            logo: pythonLogo
        },
    ],
    cplusplus: [
        {
            name: 'C++',
            desc: 'A powerful and efficient programming language used in developing system software, game engines, operating systems, and more.',
            logo: cppLogo
        },
    ],
    git: [
        {
            name: 'Git',
            desc: 'A distributed version control system used for tracking changes in source code during software development, enabling collaboration and code management.',
            logo: gitLogo
        },
    ],
    tensorflow: [
        {
            name: 'TensorFlow',
            desc: 'An open-source machine learning framework developed by Google, widely used for building and training deep learning models.',
            logo: tensorflowLogo
        },
    ],
    react: [
        {
            name: 'React',
            desc: 'A JavaScript library for building user interfaces, commonly used for developing single-page applications and interactive UI components.',
            logo: reactLogo
        },
    ],
    r: [
        {
            name: 'R',
            desc: 'A programming language and environment used for statistical computing and graphics, widely used in data analysis and research.',
            logo: rLogo
        },
    ],
    matlab: [
        {
            name: 'MATLAB',
            desc: 'A high-level programming language and interactive environment used for numerical computation, data analysis, and visualization.',
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
