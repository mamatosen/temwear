import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import Amber from '@material-ui/core/colors/amber';
import Grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';
import { Typography, withStyles, Grid } from '@material-ui/core';

import Appbar from './components/layout/Appbar';
import Home from './components/home/Home';
import Shop from './components/Shop/Shop';
import Cats from './components/categories/Categories';
import About from './components/about/About';

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
        <Router>
          <Appbar className={classes.fixed} pageIndex={pageIndex} setPageIndex={setPageIndex}/>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" exact component={About} />
          <Route path="/categories" exact component={Cats} />
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default withStyles(style)(App);
