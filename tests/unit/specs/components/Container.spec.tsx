import Container from "@/components/Container";
import MainContent from "@/components/MainContent";
import NavHeader from "@/components/NavHeader";
import NavSide from "@/components/NavSide";
import { shallow } from "enzyme";
import * as React from "react";

/* tslint:disable:jsx-key */
describe("Container", () => {
  it("should render NavHeader and MainContent.", () => {
    const wrapper = shallow(<Container />);
    expect(
      wrapper.containsAllMatchingElements([
        <NavHeader title={"Weight Recorder"} />,
        <NavSide />,
        <MainContent />
      ])
    ).toEqual(true);
  });
});
