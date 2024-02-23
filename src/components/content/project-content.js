import nodejsLogo from '../../assets/Images/nodejs.png';
import javaLogo from '../../assets/images/java.png';
import pythonLogo from '../../assets/images/python.png';
import reactLogo from '../../assets/images/react.png';
import example from '../../assets/images/test.jpg';
import checkcar from '../../assets/images/project-thumbnails/checkcar.png';

export const projectContent = {
    checkcar: [
        {
            name: 'Checkcar Website',
            desc: 'AI Powered Website to Identify and Retrieve Car Model Prices',
            thumbnail: checkcar,
            logo: [javaLogo]
        },
    ],
    checkcar2: [
        {
            name: 'Checkcar Website',
            desc: 'AI Powered Website to Identify and Retrieve Car Model Prices',
            thumbnail: example,
            logo: [reactLogo, nodejsLogo, pythonLogo]
        },
    ],

};
