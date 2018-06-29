import * as React from "react";

import { List, ListItem, ListItemText } from "@material-ui/core";

export default class NavSide extends React.Component {
  public render() {
    return (
      <List>
        <ListItem button={true}>
          <ListItemText primary={"Add Weight"} />
        </ListItem>

        <ListItem button={true}>
          <ListItemText primary={"Statistics"} />
        </ListItem>

        <ListItem button={true}>
          <ListItemText primary={"Export JSON"} />
        </ListItem>

        <ListItem button={true}>
          <ListItemText primary={"Import JSON"} />
        </ListItem>
      </List>
    );
  }
}
