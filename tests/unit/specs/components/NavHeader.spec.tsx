import { shallow } from "enzyme";
import * as React from "react";

import NavHeader from "@/components/NavHeader";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

/* tslint:disable:jsx-key */
describe("NavHeader", () => {
  it("AppBar, Toolbar, Typography should exist", () => {
    const wrapper = shallow(<NavHeader title={""} />);
    expect(wrapper.find(AppBar).length).toBe(1);
    expect(wrapper.find(Toolbar).length).toBe(1);
    expect(wrapper.find(Typography).length).toBe(1);
  });

  it("check props value", () => {
    const wrapper = shallow(<NavHeader title={"Weight Recorder"} />);
    expect(wrapper.instance().props.title).toBe("Weight Recorder");
    wrapper.setProps({ title: "test statement" });
    expect(wrapper.instance().props.title).toBe("test statement");
  });
});
