import Grid from '@mui/material/Grid';

import nodejs from '../assets/images/nodejsv2.png';


function Stack() {
    return (
        <div className='section stack'>
            <div className="section-title stack">
                Stacks.
            </div>
            <Grid className="stack-content" container>
                <Grid item xs={5} sm={5} md={5}>
                    <div className="stack-item details">
                        <h1>Node JS</h1>
                        A popular and versatile language that is considered to be the forefront of modern web frameworks.
                    </div>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <div className="stack-item logo">
                        <img src={nodejs} alt="NodeJS" className='selected-logo' />
                    </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <div className="stack-item list">
                        <div className="stack-list-background">
                            <br></br>
                        </div>
                        <div className="stack-grid">
                            <div className="stack-grid-item">
                                <img src={nodejs} alt="NodeJS" className='stack-small-logo' />
                            </div>
                            <div className="stack-grid-item">2</div>
                            <div className="stack-grid-item">3</div>
                            <div className="stack-grid-item">4</div>
                            <div className="stack-grid-item">1</div>
                            <div className="stack-grid-item">2</div>
                            <div className="stack-grid-item">3</div>
                            <div className="stack-grid-item">4</div>
                            <div className="stack-grid-item">1</div>
                            <div className="stack-grid-item">2</div>
                            <div className="stack-grid-item">3</div>
                            <div className="stack-grid-item">4</div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Stack