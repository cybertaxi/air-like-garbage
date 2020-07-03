import React, {Component} from 'react';

import classes from './App.module.css';

class Layout extends Component {
    

    render(){
        return(
            <div className = {classes.frame}>
                <header className={classes.header}> </header>
                <main className={classes.main}>
                    
                </main>
            </div>);
    }
}

export default Layout;
