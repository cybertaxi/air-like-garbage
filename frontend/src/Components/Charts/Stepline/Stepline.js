import React, {useState} from 'react';
import ApexChart from 'react-apexcharts';
import moment from 'moment';
import _ from 'lodash';



import '../../../App.css';
// import classes from './stepline.module.css';


 const Stepline = (props) => {
   console.log(props)
    const [data, setData] = useState({ 
      series: [
          {
            name: "North",
            data: _.get(props.data, ['items']).map(items=>_.get(items, ['readings','pm25_one_hourly','north']))
          },
          {
            name: "South",
            data: _.get(props.data, ['items']).map(items=>_.get(items, ['readings','pm25_one_hourly','south']))
          }
          ,
          {
            name: "East",
            data: _.get(props.data, ['items']).map(items=>_.get(items, ['readings','pm25_one_hourly','east']))
          }
          ,
          {
            name: "West",
            data: _.get(props.data, ['items']).map(items=>_.get(items, ['readings','pm25_one_hourly','west']))
          }
          ,
          {
            name: "Central",
            data: _.get(props.data, ['items']).map(items=>_.get(items, ['readings','pm25_one_hourly','central']))
          }
      ],
      options: {
        chart: {
          type: 'line',
          height: 350
        },
        stroke: {
          curve: 'stepline',
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Stepline Chart',
          align: 'left'
        },
        markers: {
          hover: {
            sizeOffset: 4
          }
        }
      },
    });


      return (
        <div id="chart">
          <ApexChart options={data.options} series={data.series} type="line" height={350} />
        </div>
      );
}

export default Stepline;


