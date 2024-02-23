// Intro Section Animations

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

export const stackButton = {
    initial: {
        opacity: 0,
        transition: { duration: 0.8, delay: 0.2 }
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.8, delay: 0.2 }
    },
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
        y: ['0%']
    },
    tapEffect: {
        transition: { duration: 0.5 },
        cursor: 'pointer'
    },
    hoverEffect: {
        cursor: 'pointer',
        y: ['0%', '-20%'],

    },

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