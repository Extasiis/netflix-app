import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from '@material-ui/core'
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"

ReactDOM.render(
  <Fragment>
    <CssBaseline />    
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Fragment>,
  document.getElementById('root')
);

