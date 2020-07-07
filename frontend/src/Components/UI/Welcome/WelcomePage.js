import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import manSitting from '../../../assets/images/man-sit.png';
import classes from './welcome.module.css';
import '../../../App.css';
class Welcome extends Component {
    render(){
        return(            
            <div className={classes.frame}>
                <section className={classes.section}> 
                    <img src={manSitting} alt="Man Sitting" />
                    <span className={classes.heading}> </span>
                </section> 

                <section className={classes.main}>
                    <p>"Air Like Garbage" is a personal project to aesthetically display information on Singapore's air pollution index. The project is programmed with ReactJS framework and using <a href ="https://data.gov.sg/dataset/psi">Govtech's Pollution Standard Index (PSI) API</a> to retrieve the information.</p>
                    <p className={classes.disclaimer}><strong>Disclaimer: </strong>All assets used in this project does not belong to me nor the intention to claim credit or fame in any form. All characters and descriptions used in this project are fictional and do not represent any persona, organization, or person in the sad real world. The objective of this website is to showcase my development skills as a software developer. If you happened to be one of the asset owner and would like your asset to be taken down due to infringement. Please contact me at huilim001@gmail.com for more discussion.</p>
                    
                </section>
                <section className={classes.enter}>
                    <Link to ="/main">Enter Site</Link>
                </section>
            </div>)
    }
}

export default Welcome;
