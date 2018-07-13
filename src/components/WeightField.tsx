import { Button, Grid, TextField } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import * as React from "react";

export default class WeightField extends React.Component {
  public render() {
    return (
      <Grid container={true} justify="space-around">
        <Grid item={true} xs={9}>
          <TextField fullWidth={true} />
        </Grid>

        <Grid item={true} xs={1}>
          <Button variant="contained" color="primary">
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    );
  }
}
