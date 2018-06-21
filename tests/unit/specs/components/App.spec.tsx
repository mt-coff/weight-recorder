import App from "@/App";
import Container from "@/components/Container";
import { shallow } from "enzyme";
import * as React from "react";

describe("App", () => {
  it("should render Container.", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Container />)).toBe(true);
  });
});
