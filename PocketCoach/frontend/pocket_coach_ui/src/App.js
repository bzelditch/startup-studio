import React, { Component, Fragment } from 'react';
import './App.css';
import {Header} from './components';
import {StudentProfile, CommentView} from './pages';
import {BrowserRouter} from 'react-router-dom';
import BaseRouter from './routes';

class App extends Component {
  render() {
    return (
      
      <Fragment>
      <Header/>
      <BrowserRouter>
          <BaseRouter/>
      </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
