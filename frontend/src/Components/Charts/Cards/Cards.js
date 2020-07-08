import React from 'react';
import CountUp from 'react-countup';
import moment from 'moment';
import '../../../App.css';
import classes from './cards.module.css';

const Cards = (props)=>{
    const card = Object.keys(props.data.items[0].readings.pm25_one_hourly).map((region, index)=>
        {   
            const reading = props.data.items[0].readings.pm25_one_hourly;
            return region !== 'central' ? (
                 <React.Fragment key={region+index}>
                    <div className={classes.Cards}>
                        <span className={classes.Name}>{region}</span>
                        <span className={classes.reading}><CountUp start={0} end={reading[region]} duration={3}/></span>
                    </div>
                </React.Fragment>) : null;
        })
    return(
            <React.Fragment>
                <span className={classes.CardsTitle}>{props.title + moment(props.data.items[0].timestamp).format('llll')}</span>
                <div className={classes.Container}>{card}</div>  
            </React.Fragment>
                 
    )
}
 

export default Cards;