// @flow
import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import type { Node } from 'react';
// $FlowFixMe
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
// $FlowFixMe
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar';

type Props = {|
  children: Node,
|};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});

const Wrapper = (props: Props) => (
  <MuiThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <NavBar />
    <Grid className="gridWrapper" container justify="center">
      <Paper className="childrenContainer"> {props.children} </Paper>
    </Grid>
  </MuiThemeProvider>
);

export default Wrapper;
