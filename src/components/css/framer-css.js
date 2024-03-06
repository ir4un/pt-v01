// Intro Section Animations

export const navbaropenbtnanim = {
    initial: {
        transition: { duration: 0.2, delay: 0.2 }
    },
    animate: {
        transition: { duration: 0.2, delay: 0.01 }

    },
    tapEffect: {
        backgroundColor: '#1b1b1b',
        transition: { duration: 0.2 }
    },
    hoverEffect: {
        backgroundColor: '#272727',
        transition: { duration: 0.2 },
        cursor: 'pointer'
    },
    hidden: {
        opacity: 1, y: 0,
    },
    visible: {
        opacity: 1, y: 95,
    }
};

export const introButtonMotion = {
    initial: {
        opacity: 0,
        transition: { duration: 0.8, delay: 0.2 }
    },
    animate: {
        opacity: 0.85,
        transition: { duration: 0.8, delay: 1.7 }
    },
    tapEffect: {
        backgroundColor: 'rgb(158, 158, 158)',
        transition: { duration: 0 }
    },
    hoverEffect: {
        backgroundColor: '#b2b2b2',
        transition: { duration: 0 }
    }
};

export const navbarMotionbtn = {
    initial: {
        opacity: 0,
        transition: { duration: 0.8, delay: 0.2 }
    },
    animate: {
        opacity: 0.95,
        transition: { duration: 0.8, delay: 1.7 }
    },
    tapEffect: {
        backgroundColor: 'rgb(158, 158, 158)',
        transition: { duration: 0.2 }
    },
    hoverEffect: {
        backgroundColor: '#b2b2b2',
        transition: { duration: 0.2 },
        cursor: 'pointer'

    }
};

export const introBlueButtonMotion = {
    initial: {
        opacity: 0,
        transition: { duration: 0.8, delay: 0.2 }
    },
    animate: {
        opacity: 0.85,
        transition: { duration: 0.8, delay: 1.9 }
    },
    tapEffect: {
        backgroundColor: '#045b77',
        transition: { duration: 0 }
    },
    hoverEffect: {
        backgroundColor: '#0682ab',
        transition: { duration: 0 }
    }
};

export const navbarMotionBluebtn = {
    initial: {
        opacity: 0,
        transition: { duration: 0.8, delay: 0.2 }
    },
    animate: {
        opacity: 0.95,
        transition: { duration: 0.8, delay: 1.7 }
    },
    tapEffect: {
        backgroundColor: '#045b77',
        transition: { duration: 0 }
    },
    hoverEffect: {
        backgroundColor: '#0682ab',
        transition: { duration: 0 },
        cursor: 'pointer'
    }
};

export const socialbtnMotion = {
    LItapEffect: {
        backgroundColor: '#063d75',
        transition: { duration: 0.2 }
    },
    LIhoverEffect: {
        backgroundColor: '#074b8f',
        transition: { duration: 0.2 }
    },
    GHtapEffect: {
        backgroundColor: '#010409',
        transition: { duration: 0.2 }
    },
    GHhoverEffect: {
        backgroundColor: '#1b2330',
        transition: { duration: 0.2 }
    },
    FBtapEffect: {
        backgroundColor: '#022865',
        transition: { duration: 0.2 }
    },
    FBhoverEffect: {
        backgroundColor: '#0547b2',
        transition: { duration: 0.2 }
    },
    YTtapEffect: {
        backgroundColor: '#650000',
        transition: { duration: 0.2 }
    },
    YThoverEffect: {
        backgroundColor: '#b20000',
        transition: { duration: 0.2 }
    },
    PDFtapEffect: {
        backgroundColor: '#470400',
        transition: { duration: 0.2 },
        cursor: 'pointer'
    },
    PDFhoverEffect: {
        backgroundColor: '#7a0700',
        transition: { duration: 0.2 },
        cursor: 'pointer'
    }
};

export const stackButton = {
    tapEffect: {
        backgroundImage: 'linear-gradient(to right, rgba(10, 10, 10, 1) 0%, rgba(0, 0, 0, 1) 100%)',
        transition: { duration: 0 },
        cursor: 'pointer'
    },
    hoverEffect: {
        backgroundImage: 'linear-gradient(to right, rgba(40, 40, 40, 1) 0%, rgba(20, 20, 20, 1) 100%)',
        transition: { duration: 0 },
        cursor: 'pointer'

    }
};

export const projectButton = {
    transition: {
        opacity: 1,
        transition: { duration: 0.2, },
    },
    tapEffect: {
        y: ['0%', '-20%'],
        transition: { duration: 0.2, },
    },
    hoverEffect: {
        cursor: 'pointer',
        y: ['0%', '-20%'],
        transition: { duration: 0.2, },

    },

};

export const activityControl = {
    tapEffect: {
        opacity: 1,
        transition: { duration: 0 },
        cursor: 'pointer'
    },
    hoverEffect: {
        opacity: 0.7,
        transition: { duration: 0 },
        cursor: 'pointer'

    }
};

export const activityDots = {
    tapEffect: {
        opacity: 1,
        transition: { duration: 0 },
        cursor: 'pointer'
    },
    hoverEffect: {
        opacity: 0.8,
        transition: { duration: 0 },
        cursor: 'pointer'
    }
};

export const contactSend = {
    tapEffect: {
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 76, 109, 1) 0%, rgba(0, 76, 109, 1) 100%)',
        transition: { duration: 0 },
        cursor: 'pointer'
    },
    hoverEffect: {
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 112, 161, 1) 0%, rgba(0, 112, 161, 1) 100%)',
        transition: { duration: 0 },
        cursor: 'pointer'
    }
};

export const animtoptobottom = {
    hidden: {
        opacity: 1, y: 0,
        transition: { duration: 0.2 }
    },
    visible: {
        opacity: 0, y: -75,
        transition: { duration: 0.2 }

    }
};

export const mobilenavbtnanim = {
    hidden: {
        opacity: 1,
        transition: { duration: 0.2 }

    },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 }


    }
};


export const animrighttoleft = {
    hidden: {
        opacity: 0, x: 75
    },
    visible: {
        opacity: 1, x: 0
    }
};

export const animlefttoright = {
    hidden: {
        opacity: 0, x: -75
    },
    visible: {
        opacity: 1, x: 0
    }
};
export const animbottomtotop = {
    hidden: {
        opacity: 0, y: 75
    },
    visible: {
        opacity: 1, y: 0
    }
};