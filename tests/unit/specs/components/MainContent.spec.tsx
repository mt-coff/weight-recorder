import { shallow } from "enzyme";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import MainContent from "@/components/MainContent";
import Routes from "@/Routes";

describe("NavHeader", () => {
  it("should render AppBar", () => {
    const wrapper = shallow(<MainContent />);

    expect(wrapper.find(BrowserRouter).length).toBe(1);
    expect(wrapper.find(Routes).length).toBe(1);
  });
});
