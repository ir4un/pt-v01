import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import EduItem from './EduItem';


function Edu() {

    const [selectedEducation, setSelectedEducation] = useState('SPM');
    const [isContentRevealed, setContentRevealed] = useState(true);

    const handleEducationSelect = (education) => {
        setSelectedEducation(education);
        if (education != selectedEducation) {
            setContentRevealed(false);
            setTimeout(() => {
                setContentRevealed(true);
            }, 100);
        }
    };
    return (
        <div className='section edu'>
            <div className="section-title edu">
                Education.
            </div>
            <Container className="edu-content" sx={{ py: 8 }}>
                <Grid container>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className="edu-selector-container">
                            <div
                                className={`edu-selector ${selectedEducation === 'SPM' ? 'selected' : ''}`}
                                onClick={() => handleEducationSelect('SPM')}>
                                <p>SPM</p>
                            </div>
                            <div
                                className={`edu-selector ${selectedEducation === 'Diploma' ? 'selected shape2' : ''} diploma`}
                                onClick={() => handleEducationSelect('Diploma')}>
                                <p>Diploma</p>
                            </div>
                            <div
                                className={`edu-selector ${selectedEducation === 'Degree' ? 'selected' : ''} shape`}
                                onClick={() => handleEducationSelect('Degree')}>
                                <p>Degree</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10}>
                        <EduItem selectedEducation={selectedEducation} isRevealed={isContentRevealed} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Edu