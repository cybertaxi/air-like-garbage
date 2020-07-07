import React from 'react';
import classes  from './notfound.module.css';
import {NavLink} from 'react-router-dom';
import '../.../../../../App.css';
import notfoundGirl from '../../../assets/images/notfound2.png';

const NotFound = (props) => {
    return (
            <div className={classes.frame}>
                <img src={notfoundGirl} alt="angry!"/>
                <div className={classes.description}>
                    <h1> </h1>
                    <h2> </h2>
                    <span></span>
                    <NavLink to ="/main"><button>Back to Charts!</button></NavLink>
                </div>
            </div>
    );
}

export default NotFound;


