/* @flow */

import React from "react";
import { Card, CardMedia, Grid, Paper } from "@material-ui/core";

const Home = () => (
  <Grid className="homeContainer" container justify="center">
    <Grid xs={12} item>
      <Card>
        <CardMedia
          className="sushiLandingImage"
          src="https://i.postimg.cc/0yLc9Wff/sushi.png"
          component="img"
        />
        <Paper> Sushi In San Francisco </Paper>
      </Card>
      {/* <img src="https://i.postimg.cc/0yLc9Wff/sushi.png" /> */}
    </Grid>
  </Grid>
);

export default Home;
