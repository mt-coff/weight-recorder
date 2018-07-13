import { shallow } from "enzyme";
import * as React from "react";

import WeightField from "@/components/WeightField";
import AddWeight from "@/pages/AddWeight";
import { Grid } from "@material-ui/core";

describe("Addweight", () => {
  it("should render components & element", () => {
    const wrapper = shallow(<AddWeight />);

    expect(wrapper.find(Grid).length).toBe(2);
    expect(wrapper.find("h3").length).toBe(1);
    expect(wrapper.find(WeightField).length).toBe(1);
  });
});
