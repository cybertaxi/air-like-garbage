import React, { useState, useEffect} from 'react';
import moment from 'moment';
import SingleCard from '../../Charts/Cards/SingleCard/Card';
import _ from 'lodash';
import '../../../App.css';
import classes from './chartdashboard.module.css';

const ChartDashboard = (props)=>{
    const [data, setData] = useState(_.shuffle(Object.keys(props.data.items[0].readings)));
    const area = [classes.areaA,classes.areaB,classes.areaC,classes.areaD,classes.areaE,classes.areaF,classes.areaG,classes.areaH,classes.areaI,classes.areaJ,classes.areaK,classes.areaL];
      useEffect(()=>{
        //Shuffle and display the key pairs




        //   console.log("[Charts]: Calling API for PMI and PSI");
        //   Promise.all([
        //           getDataset('psi'),
        //           getDataset('pm25'),
        //           getDataset('pm25', moment().format().substring(0,10)),
        //   ]).then(responses => {
        //         // setData(prevState => _.merge(responses, prevState));
        //         console.log('All completed!');
        //   }).catch(error => {
        //           console.log(error);
        //   });
      },[]);

    const sortAllWidgets = data.map((data, index)=><div className={area[index]}><SingleCard key={data}  chosenType={data} data={props.data.items[0].readings[data]}/></div>);
 
     return (
       <div className={classes.container}>
           {sortAllWidgets}
       </div>)
}

export default ChartDashboard;
