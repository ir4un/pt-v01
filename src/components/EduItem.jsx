// import { useEffect } from 'react';
import smksilogo from '../assets/images/smksilogo.png';
import apulogo from '../assets/images/apuwhite.jpg';
import PropTypes from 'prop-types'; // Import PropTypes

function EduItem({ selectedEducation, isRevealed }) {

  let title, logo, desc, result, date;

  // I will move this content into a seperate js file, someday
  if (selectedEducation === 'SPM') {
    title = 'Sijil Pelajaran Malaysia';
    logo = smksilogo;
    desc = 'Introduced to Computer Science class during Form 4 while getting to know the basics of programming.';
    result = 'Grade: 3A 3B 2C 1D';
    date = '2014-2018';
  } else if (selectedEducation === 'Diploma') {
    title = 'Diploma in Information and Communication Technology With Specialism in Software Engineering';
    logo = apulogo;
    desc = 'Delved deeper into the world of Software Engineering and graduated with flying colors.';
    result = 'CGPA: 3.98';
    date = '2019-2021';
  } else if (selectedEducation === 'Degree') {
    title = 'Bachelor of Computer Science (Hons) (Artificial Intelligence)';
    logo = apulogo;
    desc = 'Went into the Artificial Intelligence side of Computer Science with deep exposure towards AI technologies and machine learning techniques. Graduated and completed the final year project known as Checkcar, an AI powered car price and model identifier!';
    result = 'CGPA: 3.58';
    date = '2021-2023';
  } else {
    title = 'Top Text';
    logo = smksilogo;
    desc = 'Middle Text';
    result = 'Your Mom';
    date = 'Bottom Text';
  }

  return (

    <div className='edu-details'>
      <div className="edu-title">
        <h2>{title}</h2>
      </div>
      <div className="edu-logo">
        <img src={logo} alt={selectedEducation} className='edu-logo' />
      </div>
      <div className="edu-desc">
        {desc}
      </div>
      <div className="result-ico">
      </div>
      <div className="edu-result">
        {result}
      </div>
      <div className="edu-date">
        {date}
      </div>
      <div className={`edu-overlay ${isRevealed ? 'revealed' : 'hidden'}`}></div>

    </div>
  );
}

EduItem.propTypes = {
  selectedEducation: PropTypes.oneOf(['SPM', 'Diploma', 'Degree']).isRequired, // Define prop types
  isRevealed: PropTypes.bool.isRequired, // Add PropTypes validation
};

export default EduItem;
