/* @flow */

import React from "react";
import { Button, Card, CardMedia, Grid, Paper } from "@material-ui/core";

const Home = () => (
  <Grid className="homeContainer" container justify="center">
    <Grid xs={12} item>
      <CardMedia
        className="sushiLandingImage"
        src="https://i.postimg.cc/0yLc9Wff/sushi.png"
        component="img"
      />
      <div> Sushi In San Francisco </div>
      <div className="menuBottomButtons">
        <Button className="menuPrimaryButton" href="/learn" variant="outlined">
          Learn
        </Button>
        <Button
          className="menuPrimaryButton"
          href="/revisit"
          variant="outlined"
          color="primary"
        >
          Revisit
        </Button>
        <Button
          className="menuPrimaryButton"
          href="explore"
          variant="outlined"
          color="secondary"
        >
          Explore
        </Button>
      </div>
    </Grid>
  </Grid>
);

export default Home;
