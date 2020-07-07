import React from 'react';
import classes from './Navbar.module.css';
import '../../../App.css';
import head from '../../../assets/images/whatever.png';
// import NavigationItem from '../NavigationBar/NavItems/Navitem';

const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className = {classes.nav}>
                        <img src ={head} alt="head" />
                        <span className={classes.logo}>Air Like Garbage leh.</span>
                        {/* <NavigationItem link="/" active>
                            Home
                        </NavigationItem>
                        <NavigationItem link="/main" active>Crew</NavigationItem>
                        <NavigationItem link="/main" active>Ships</NavigationItem> */}
            </nav>
        </React.Fragment>
    );
}

export default Navbar;	