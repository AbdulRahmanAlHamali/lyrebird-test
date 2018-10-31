import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/main-page';
import { withCookies } from 'react-cookie';
import AuthorizePage from './pages/authorize-page';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/authorize" render={() => <AuthorizePage cookies={this.props.cookies}/>}/>
          <Route path='/' render={() => <MainPage cookies={this.props.cookies}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withCookies(App);
