import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import Amber from '@material-ui/core/colors/amber';
import Grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';

import { Button } from '@material-ui/core';

const theme = createMuiTheme({
  palette:{
    primary: Grey,
    secondary: Amber,
  },

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant="contained">Home</Button>
    </ThemeProvider>
  );
}

export default App;
