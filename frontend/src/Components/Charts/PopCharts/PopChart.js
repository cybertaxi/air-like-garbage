import React, {useState} from 'react';
import ApexChart from 'react-apexcharts';
import moment from 'moment';
import _ from 'lodash';



import '../../../App.css';
// import classes from './Popchart.module.css';


 const SyncCharts = (props) => {
   
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
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454', 'salmon', 'red', 'navajowhite'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'PM 2.5 Index',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            // colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          //timestamp
          categories: _.get(props.data, ['items']).map(items=>moment(items.timestamp).format('HH:mm')),
          title: {
            text: 'Hourly Timestamp'
          }
        },
        yaxis: {
          // title: {
          //   text: '[todayDate]'
          // },
          min: 0,
          max: 20
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
    }
    );


      return (
        <div id="chart">
          <ApexChart options={data.options} series={data.series} type="line" height={350} />
        </div>
      );
}

export default SyncCharts;


