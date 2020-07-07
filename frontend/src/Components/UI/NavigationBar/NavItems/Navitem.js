import React from 'react';
import {NavLink} from 'react-router-dom';
import classes  from './Navitem.module.css';

const navItem = (props) => {

    const styleName = classes.button+' '+ classes.buttonTextUpper + ' ' + classes.buttonSizeS + ' ' + classes.buttonTextThick;

    return (
     
        <button className={styleName}>
            <NavLink to ={props.link} exact> {props.children}</NavLink>
        </button>    
    );
}

export default navItem;


