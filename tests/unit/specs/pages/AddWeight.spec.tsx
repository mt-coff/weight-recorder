import { createShallow } from "@material-ui/core/test-utils";
import * as React from "react";

import WeightField from "@/components/WeightField";
import AddWeight from "@/pages/AddWeight";
import WeightRecorder from "@/ts/WeightRecorder";
import { Grid } from "@material-ui/core";

describe("Addweight", () => {
  const shallow = createShallow();

  it("should render components & element", () => {
    const wrapper = shallow(<AddWeight />);

    expect(wrapper.find(Grid).length).toBe(2);
    expect(wrapper.find("h3").length).toBe(1);
    expect(wrapper.find(WeightField).length).toBe(1);
  });

  it("should call addRecord from registerWeight method", () => {
    const wrapper = shallow(<AddWeight />);
    const instance = wrapper.instance() as AddWeight;
    const record = instance.registerWeight("80");
    const weightRecorder = new WeightRecorder();

    expect(weightRecorder.getRecord().pop()).toEqual(record);
  });
});
