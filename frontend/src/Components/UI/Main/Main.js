import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import WelcomePage from '../Welcome/WelcomePage';
import Notfound from '../404/Notfound';
import Inprogress from '../Inprogress/Inprogress';
import Layout from '../../../HOC/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
// import classes from './Main.module.css';

class Main extends Component {
  
  render(){
      return (
          <BrowserRouter>
              <Switch>
              <Route path = "/" exact component={WelcomePage} /> 
              <Layout>
                <Switch>
                    <Route path = "/main" exact component={Inprogress} /> 
                    <Route component={Notfound} />
                </Switch>
              </Layout>
              </Switch>
             
          </BrowserRouter>
      );
  }
}
export default Main;