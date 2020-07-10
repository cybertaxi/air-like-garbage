import React, { useState } from 'react';
import CountUp from 'react-countup';
import _ from 'lodash';
import '../../../../App.css';
import classes from './card.module.css';

const Card = (props)=>{
    const [chosenRegion]= useState(_.shuffle(_.keys(props.data))[0]);
    return(
        <div className={classes.Card}>
            {/* <span className={classes.CardsTitle}>{chosenRegion.toUpperCase()}</span> */}
            <span className={classes.reading}><CountUp start={0} end={props.data[chosenRegion]} duration={3}/></span>
            <span className={classes.name}>{(props.chosenType.split('_').join(' ') +' @ ' + chosenRegion).toUpperCase()}</span>
        </div>
    )
}
 

export default Card;