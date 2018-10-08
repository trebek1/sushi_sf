/* @flow */

import React from "react";
import { Button, Card, CardMedia, Grid, Paper } from "@material-ui/core";

const Home = () => (
  <Grid className="homeContainer" container justify="center">
    <Grid xs={12} item>
      <Card>
        <CardMedia
          className="sushiLandingImage"
          src="https://i.postimg.cc/0yLc9Wff/sushi.png"
          component="img"
        />
        <div> Sushi In San Francisco </div>
        <div className="menuBottomButtons">
          <Button href="/learn" variant="outlined">
            Learn
          </Button>
          <Button href="/revisit" variant="outlined" color="primary">
            Revisit
          </Button>
          <Button href="explore" variant="outlined" color="secondary">
            Explore
          </Button>
        </div>
      </Card>
    </Grid>
  </Grid>
);

export default Home;
