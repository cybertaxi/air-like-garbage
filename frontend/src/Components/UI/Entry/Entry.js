import React, { useState, useEffect} from 'react';
import moment from 'moment';
import _ from 'lodash';

import '../../../App.css';
import classes from './entry.module.css';

const EntryField = (props)=>{
    //   const [ data, setData ] = useState({});
      
    //   useEffect(()=>{
    //       Promise.all([
    //               getDataset('psi'),
    //               getDataset('pm25'),
    //               getDataset('pm25', moment().format().substring(0,10)),
    //       ]).then(responses => {
    //             // setData(prevState => _.merge(responses, prevState));
    //             console.log('All completed!');
    //       }).catch(error => {
    //               console.log(error);
    //       });
    //   },[]);
    
     return (
       <React.Fragment>
           <form>
                <div className={classes.field}>
                    <label for="date" className={classes.label}>Date: </label>
                    <input type='email' name="date" placeholder=""/>
                </div>
           </form>

          {/* {Pm25ToCards}
          {PM25HourltoCards} */}
       </React.Fragment>)
}

export default EntryField;
