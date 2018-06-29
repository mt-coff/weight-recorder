import * as React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

interface Iprops {
  title: string;
}

export default class NavHeader extends React.Component<Iprops> {
  constructor(props: Iprops) {
    super(props);
  }
  public render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
