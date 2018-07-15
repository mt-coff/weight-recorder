import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import * as React from "react";

interface Iprops {
  register(weight: string): object;
}

interface Istate {
  weight: string;
}

export default class WeightField extends React.Component<Iprops, Istate> {
  public constructor(props: Iprops) {
    super(props);
    this.state = { weight: "0.0" };
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  public render() {
    return (
      <Grid container={true} justify="space-around">
        <Grid item={true} xs={9}>
          <TextField
            fullWidth={true}
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>
            }}
            value={this.state.weight}
            onChange={this.handleChange}
          />
        </Grid>

        <Grid item={true} xs={1}>
          <Button variant="contained" color="primary" onClick={this.register}>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ weight: e.target.value });
  }

  private register(): void {
    if (confirm(`${this.state.weight}Kgで登録します`)) {
      this.props.register(this.state.weight);
    }
  }
}
