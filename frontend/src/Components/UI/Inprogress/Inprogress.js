import React from 'react';
import classes  from './Inprogress.module.css';

import '../.../../../../App.css';
import readingGirl from '../../../assets/images/reading.svg';

const Inprogress = (props) => {
    return (
            <div className={classes.frame}>
                <img src={readingGirl} alt="working on it!"/>
                <div className={classes.description}>
                    <h1> </h1>
                    <h2>We're currently working...</h2>
                    <p>We are working on this aspect of the site.</p>
                    <p>Give us sometime and we'll be back!</p>
                    {/* <NavLink to ="/main"><button>Back to Charts!</button></NavLink> */}
                </div>
            </div>
    );
}

export default Inprogress;


