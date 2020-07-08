import React, { useState, useEffect} from 'react';
// import Chart from 'react-apexcharts';
import moment from 'moment';
import _ from 'lodash';
import PopCharts from './PopCharts/PopChart';
// import CountUp from 'react-countup';
import Cards from './Cards/Cards';
import api from '../../axios/axios';
import '../../App.css';
// import classes from './Charts.module.css';

const AdvanceChart = (props)=>{
      const [ data, setData ] = useState({});
      
      useEffect(()=>{
          console.log("[Charts]: Calling API for PMI and PSI");
          Promise.all([
                  getDataset('psi'),
                  getDataset('pm25'),
                  getDataset('pm25', moment().format().substring(0,10)),
          ]).then(responses => {
                // setData(prevState => _.merge(responses, prevState));
                console.log('All completed!');
          }).catch(error => {
                  console.log(error);
          });
      },[]);


      const getDataset = (url, dateformat) => {
          const validDate = dateformat ?  '/?date='+dateformat : '/';
          const URL = url+validDate;
          const urlKey = dateformat ? url+'_24hr' : url;
          return new Promise((resolve, reject)=>{api.get(URL,  
          {headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
          .then((res) => {
              setData(prevState=> _.merge({[urlKey]: {...res.data} }, prevState));
              resolve();
          })
          .catch(function (error) {
                console.log(error);
                reject(error);
          });})
      }
     const Pm25ToCards = !_.isEmpty(data.pm25) ? <Cards data ={data.pm25} title='PM 2.5 hourly Index @ '/> :  null
     const PM25HourltoCards = !_.isEmpty(data.pm25_24hr) ? <PopCharts data ={data.pm25_24hr} /> :  null
    
     return (
       <React.Fragment>
          {Pm25ToCards}
          {PM25HourltoCards}
       </React.Fragment>)
}

export default AdvanceChart;
