/* @flow */

import React from 'react';
import { AppBar, List, Toolbar, Typography } from '@material-ui/core';

import RestaurantListItem from './RestaurantListItem';

class Learn extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Sushi Restaurants
            </Typography>
          </Toolbar>
        </AppBar>
        <List className="listOfRestaurants">
          {this.props.restaurants.map(restaurant => (
            <RestaurantListItem
              key={restaurant.title}
              title={restaurant.title}
              src={restaurant.src}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default Learn;
