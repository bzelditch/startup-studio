import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Header } from './components';
import {StudentProfileView, CoachProfileView} from "./pages";

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route strict path='/student' component={StudentProfileView} />
            <Route strict path='/' component={CoachProfileView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

