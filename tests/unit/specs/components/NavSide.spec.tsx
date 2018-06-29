import { shallow } from "enzyme";
import * as React from "react";

import NavSide from "@/components/NavSide";
import { List, ListItem, ListItemText } from "@material-ui/core";

describe("NavSide", () => {
  it("should render List & ListItem", () => {
    const wrapper = shallow(<NavSide />);
    expect(wrapper.find(List).length).toBe(1);
    expect(wrapper.find(ListItem).length).toBe(4);
    expect(wrapper.find(ListItemText).length).toBe(4);
  });
});
