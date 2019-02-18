import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import BaseRouter from './routes';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BrowserRouter>
          <BaseRouter />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
