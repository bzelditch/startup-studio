import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Header } from './components';
import {StudentProfileView, CoachProfileView} from "./pages";
import { MuiThemeProvider, createMuiTheme, creat } from '@material-ui/core/styles';
// import createPalette from 'material-ui/styles/palette';
// import createTypography from 'material-ui/styles/typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E9353F",
      light: "#FF6D6A",
      dark: "#AF0018",
    },
    secondary: {
      main: "#0070B5",
      light: "#569EE8",
      dark: "#004585",
    },
    extra: {
      navBlack: "#010101",
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'Didact Gothic',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
console.log(theme)

class App extends Component {
  render() {

    return (
      <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/student' component={StudentProfileView} />
            <Route path='/coach/:coachId' component={CoachProfileView} />
          </Switch>
        </div>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;

