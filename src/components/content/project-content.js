import nodejsLogo from '../../assets/Images/nodejs.png';
import htmlLogo from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.png';
import javaLogo from '../../assets/images/java.png';
import javascriptLogo from '../../assets/images/js.png';
import pythonLogo from '../../assets/images/python.png';
import reactLogo from '../../assets/images/react.png';
import tensorflowLogo from '../../assets/images/tf.png';
import sql from '../../assets/images/sql.png';
import vb from '../../assets/images/vb.png';
import firebase from '../../assets/images/firebase.png';

import checkcar from '../../assets/images/project-thumbnails/checkcar.png';
import ocrapi from '../../assets/images/project-thumbnails/ocrapi.png';
import giant from '../../assets/images/project-thumbnails/giant.png';
import ahhasc from '../../assets/images/project-thumbnails/ahhasc.png';
import moonlight from '../../assets/images/project-thumbnails/moonlight.png';
import smksi from '../../assets/images/project-thumbnails/smksiproject.png';
import farekna from '../../assets/images/project-thumbnails/farekna.png';
import fareknapetrol from '../../assets/images/project-thumbnails/fareknapetrol.png';

export const projectContent = {
    checkcar: [
        {
            name: 'Checkcar Website',
            desc: 'AI Powered Website to Identify and Retrieve Car Model Prices',
            thumbnail: checkcar,
            logo: [reactLogo, nodejsLogo, pythonLogo, tensorflowLogo, firebase]
        },
    ],
    ocrapi: [
        {
            name: 'OCR-API',
            desc: `A Simple Website For Detecting Unique ID's within PDF Documents Powered by Google Vision`,
            thumbnail: ocrapi,
            logo: [htmlLogo, cssLogo, javascriptLogo]
        },
    ],
    giant: [
        {
            name: 'Fusionex Giant',
            desc: `Powerful Website Developed By Fusionex providing Data Analytics Services to it's clients`,
            thumbnail: giant,
            logo: [nodejsLogo,]
        },
    ],

    ahhasc: [
        {
            name: 'AHHASC',
            desc: `Java application for hostel management and hotel equipment repair booking`,
            thumbnail: ahhasc,
            logo: [javaLogo]
        },
    ],

    // here4u: [
    //     {
    //         name: 'HereForYou Consultation',
    //         desc: `Java application for hostel management and hotel equipment repair booking`,
    //         thumbnail: ahhasc,
    //         logo: [javaLogo]
    //     },
    // ],

    farekna: [
        {
            name: 'Farekna Website',
            desc: `Developed a Website for Farekna to Display General Information of Their Subsidaries`,
            thumbnail: farekna,
            logo: [htmlLogo, cssLogo, javascriptLogo]
        },
    ],
    fareknapetrol: [
        {
            name: 'Farekna Petrolchemical',
            desc: `A Website Focused On The Various Products Provided by Farekna Petrolchemical`,
            thumbnail: fareknapetrol,
            logo: [htmlLogo, cssLogo, javascriptLogo]
        },
    ],

    moonlight: [
        {
            name: 'Moonlight Bagels',
            desc: `A Simple VB.NET Application Where Users Can Order Delictable Food and Drinks`,
            thumbnail: moonlight,
            logo: [vb]
        },
    ],

    smksi: [
        {
            name: 'SMKSI Uniform Unit Registration',
            desc: `A Simple Website Built with Dreamweaver using HTML, CSS and SQL for Student Registration`,
            thumbnail: smksi,
            logo: [htmlLogo, cssLogo, sql]
        },
    ],

};
