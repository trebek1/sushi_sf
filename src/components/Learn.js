/* @flow */

import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Learn = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Sushi Restaurants
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Learn;
