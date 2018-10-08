/* @flow */

import React from "react";
import {
  AppBar,
  CardMedia,
  Divider,
  List,
  ListItem,
  Toolbar,
  Typography
} from "@material-ui/core";

const Learn = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Sushi Restaurants
        </Typography>
      </Toolbar>
    </AppBar>
    <List className="listOfRestaurants">
      <ListItem container className="listItemContainer">
        <div item className="listItem">
          Sushi 1
        </div>
        <div item className="listItem">
          <img
            className="listImage"
            src="https://i.postimg.cc/0yLc9Wff/sushi.png"
          />
        </div>
      </ListItem>
      <Divider />
      <ListItem container className="listItemContainer">
        Sushi 2
        <img
          className="listImage"
          src="https://i.postimg.cc/0yLc9Wff/sushi.png"
        />
      </ListItem>
      <Divider />
      <ListItem container className="listItemContainer">
        Sushi 3
        <img
          className="listImage"
          src="https://i.postimg.cc/0yLc9Wff/sushi.png"
        />
      </ListItem>
      <Divider />
      <ListItem container className="listItemContainer">
        Sushi 4
        <img
          className="listImage"
          src="https://i.postimg.cc/0yLc9Wff/sushi.png"
        />
      </ListItem>
      <Divider />
      <ListItem container className="listItemContainer">
        Sushi 5
        <img
          className="listImage"
          src="https://i.postimg.cc/0yLc9Wff/sushi.png"
        />
      </ListItem>
      <Divider />
    </List>
  </div>
);

export default Learn;
