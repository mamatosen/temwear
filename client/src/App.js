import React, { useState } from 'react';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import Amber from '@material-ui/core/colors/amber';
import Grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';
import { Typography, withStyles, Grid } from '@material-ui/core';

import Appbar from './components/layout/Appbar';
import Home from './components/home/Home';

const theme = createMuiTheme({
  palette:{
    type: 'dark',
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
  fixed:{
    position: 'fixed',
    zIndex: 1000
  },
}

function App(props) {
  const { classes } = props;
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" justify="flex-start" alignItems="center">
        <Appbar className={classes.fixed} pageIndex={pageIndex}/>
        <Home/>
      </Grid>
    </ThemeProvider>
  );
}

export default withStyles(style)(App);
