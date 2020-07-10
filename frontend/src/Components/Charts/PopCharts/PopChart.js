import React, {useState} from 'react';
import ApexChart from 'react-apexcharts';
import moment from 'moment';
import _ from 'lodash';
import '../../../App.css';
import classes from './Popchart.module.css';


 const SyncCharts = (props) => {
    const [data] = useState({ 
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
          toolbar: {
            show: false
          }
        },
        colors: ['#32CD32', '#3da9fc', '#ff8c69', '#FF0000', '#FFDEAD'],
        dataLabels: {
          enabled: false,
          background:{
            enabled:false,
          }
        },
        stroke: {
          width: 2,
          curve: 'smooth'
        },
        title: {
          text: 'PM2.5 on '+ moment(_.get(props.data, ['items','0','timestamp']).substring(0,10)).format('LL'),
          align: 'left',
          // style:{
          //   fontSize: '0.5rem'
          // }
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            opacity: 0.5
          },
        },
        markers: {
          size: 0
        },
        xaxis: {
          //timestamp
          categories: _.get(props.data, ['items']).map(items=>moment(items.timestamp).format('HH:mm')),
          title: {
            text: 'Hourly Timestamp'
          },
          crosshairs:{
            show:true,
            position: 'back',
            stroke:{
              color:'black',
              width:1,
            }
          },
        },
        yaxis: {
          min: 0,
          max: 50,
        },
        tooltip:{
          enabled:true,
          x:{ show:true },
          y:{
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName,
            },
          },
          items:{ display:'flex' },
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
        }
      },
    }
    );


      return (
        <div id="chart">
          <ApexChart className={classes.container} options={data.options} series={data.series} type="line" height={350} />
        </div>
      );
}

export default SyncCharts;


