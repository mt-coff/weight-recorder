import { shallow } from "enzyme";
import * as React from "react";

import MainContent from "@/components/MainContent";

describe("NavHeader", () => {
  it("should render AppBar", () => {
    const wrapper = shallow(<MainContent />);
    expect(wrapper.containsMatchingElement(<div />)).toEqual(true);
  });
});
