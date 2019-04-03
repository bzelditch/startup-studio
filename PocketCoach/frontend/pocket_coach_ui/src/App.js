import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Header } from './components';
import {StudentProfileView, CoachProfileView} from "./pages";

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/student' component={StudentProfileView} />
            <Route path='/coach/:coachId' component={CoachProfileView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

