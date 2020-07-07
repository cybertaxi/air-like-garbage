import React, {Component} from 'react';
import Navbar from '../../Components/UI/NavigationBar/Navbar';
import classes from './layout.module.css';
import '../../App.css';
class Layout extends Component {
    render(){
        return(            
            <div className={classes.frame}>
                <header className={classes.header}> 
                    <Navbar />
                </header>
                <main className={classes.main}> {this.props.children} </main>
            </div>)
    }
}

export default Layout;
