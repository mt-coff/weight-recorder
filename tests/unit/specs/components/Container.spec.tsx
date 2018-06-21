import Container from "@/components/Container";
import MainContent from "@/components/MainContent";
import NavHeader from "@/components/NavHeader";
import { shallow } from "enzyme";
import * as React from "react";

describe("Container", () => {
  it("should render NavHeader and MainContent.", () => {
    const wrapper = shallow(<Container />);
    expect(
      wrapper.containsAllMatchingElements([
        <NavHeader key="NavHeader" />,
        <MainContent key="MainContent" />
      ])
    ).toEqual(true);
  });
});
