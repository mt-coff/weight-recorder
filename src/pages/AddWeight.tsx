import * as React from "react";

import WeightField from "@/components/WeightField";
import WeightRecorder from "@/ts/WeightRecorder";
import { Grid } from "@material-ui/core";

export default class AddWeight extends React.Component {
  public render() {
    return (
      <Grid container={true}>
        <Grid item={true} xs={10} justify="center">
          <h3>AddWeight</h3>
          <WeightField register={this.registerWeight} />
        </Grid>
      </Grid>
    );
  }

  public registerWeight(weight: string): object {
    const wr = new WeightRecorder();
    const res = wr.addRecord(weight);

    return res;
  }
}
