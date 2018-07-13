import { shallow } from "enzyme";
import * as React from "react";

import WeightField from "@/components/WeightField";
import { Button, Grid, TextField } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

describe("WeightField", () => {
  it("should render TextField component", () => {
    const wrapper = shallow(<WeightField />);

    expect(wrapper.find(Grid).length).toBe(3);
    expect(wrapper.find(TextField).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(AddIcon).length).toBe(1);
  });
});
