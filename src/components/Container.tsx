import MainContent from "@/components/MainContent";
import NavHeader from "@/components/NavHeader";
import NavSide from "@/components/NavSide";
import { Grid } from "@material-ui/core";

import * as React from "react";

export default class Container extends React.Component {
  public render() {
    return (
      <div>
        <NavHeader title="Weight Recorder" />

        <Grid container={true} spacing={24}>
          <Grid item={true} xs={3}>
            <NavSide />
          </Grid>

          <Grid item={true} xs={9}>
            <MainContent />
          </Grid>
        </Grid>
      </div>
    );
  }
}
