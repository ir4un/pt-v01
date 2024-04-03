import blissv2 from '../assets/images/blissless.png';
import amiya from '../assets/images/amiyahold.png';
import lolidance from '../assets/images/lolidance.gif';
import gupgif from '../assets/images/gupgif.gif';
import catto1 from '../assets/images/catto1.gif';
import './css/component-css.scss';

function Footer() {
    return (
        // I will add more stuff soon
        <div className='section footer'>
            <div className='footerimg'>
                <img src={blissv2} alt="Your Image" className='footer-bg' />
            </div>
            <div className="footergifs">
                <img src={amiya} alt="Your Image" className='amiya-img' />
                <img src={lolidance} alt="Your Image" className='loli-gif' />
                <img src={gupgif} alt="Your Image" className='gup-gif' />
                <img src={catto1} alt="Your Image" className='cat-gif' />
            </div>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
    )
}

export default Footer