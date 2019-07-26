import React from 'react';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import Amber from '@material-ui/core/colors/amber';
import Grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';
import { Button, Typography, withStyles, Grid } from '@material-ui/core';
import AppBar from './components/layout/AppBar';

const grey900 = Grey[900];

const theme = createMuiTheme({
  palette:{
    primary: {main: Grey['900']},
    secondary: Amber,
  },
  direction: 'rtl',
  typography:{
    fontFamily: [
      'Parastoo',
      'Titrbold',
    ],
    direction: 'rtl',
  }
});

const style = {
  header:{
    background: 'url("https://static1.squarespace.com/static/5258099ae4b0f18da5039ed2/t/59e900f99f8dce364d7caa6c/1508442362109/PonyFriday_header_Shopping_Fulla.png")',
    height: 500,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  transparency:{
    background: 'rgba(0, 0, 0, 0.8)',
    width: "100%",
    height: "100%",
  }
}

function App(props) {
  const { classes } = props;

  return (
    <ThemeProvider theme={theme}>
      <AppBar/>
      <Grid container className={classes.header}>
        <div className={classes.transparency}>
          <Grid container style={{width: "100%", height: "100%"}} justify="center" alignItems="center">
            <Typography color="secondary" variant="h1" fontFamily='Titrbold'><b>محصولات پوشیدنی تِم</b></Typography>
          </Grid>
        </div>
      </Grid>
      <Typography>Tem website will be available here</Typography>
    </ThemeProvider>
  );
}

export default withStyles(style)(App);
