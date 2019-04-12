import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Header } from './components';
import {StudentProfileView, CoachProfileView} from "./pages";
import { MuiThemeProvider, createMuiTheme, creat } from '@material-ui/core/styles';
// import createPalette from 'material-ui/styles/palette';
// import createTypography from 'material-ui/styles/typography';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E9353F",
      light: "#FF6D6A",
      dark: "#AF0018",
    },
    secondary: {
      main: "#004585",
      light: "#0070B5",
      dark: "#004585",
    },
    navBlack: "#0A0707",
    background: {
      default: "#FFFCFC",
      paper: "#eeeeee",
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Open Sans', sans-serif",
    fontFamilySecondary: "'Didact Gothic', sans-serif",
    fontSize: 18,
  },
});

theme = {
  ...theme,
  typography: {
    ...theme.typography,
    h4: {
      ...theme.typography.h4,
      fontFamily: theme.typography.fontFamilySecondary,
    }
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'initial',
        fontWeight: 600,
      },
      root: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit*2,
      },
    },
    MuiTabs: {
      indicator: {
        height: 5,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'initial',
        fontWeight: 600,
        fontSize: 25,
      },
    },
  }
};
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

