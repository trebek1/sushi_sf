import React from 'react';
import { ListItem, Divider } from '@material-ui/core';

type Props = {|
  title: string,
  src: string,
|};

const RestaurantListItem = (props: Props) => (
  <>
    <ListItem className="listItemContainer">
      <div className="listItem">{props.title}</div>
      <div className="listItem">
        <img alt="sushi" className="listImage" src={props.src} />
      </div>
    </ListItem>
    <Divider />
  </>
);

export default RestaurantListItem;
