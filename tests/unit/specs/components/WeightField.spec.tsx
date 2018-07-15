import { createShallow } from "@material-ui/core/test-utils";
import * as React from "react";

import WeightField from "@/components/WeightField";
import { Button, Grid, TextField } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

describe("WeightField", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render TextField component", () => {
    const shallow = createShallow();
    const mockFn = jest.fn();
    const wrapper = shallow(<WeightField register={mockFn} />);

    expect(wrapper.find(Grid).length).toBe(3);
    expect(wrapper.find(TextField).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(AddIcon).length).toBe(1);
  });

  it("should input weight value", () => {
    const shallow = createShallow();
    const mockFn = jest.fn();
    const wrapper = shallow(<WeightField register={mockFn} />);

    wrapper.find(TextField).simulate("change", { target: { value: "90" } });

    expect(wrapper.state("weight")).toBe("90");
  });

  it("should call register event. case confirm true", () => {
    const shallow = createShallow();
    const mockFn = jest.fn();
    const wrapper = shallow(<WeightField register={mockFn} />);

    jest.spyOn(window, "confirm").mockReturnValue(true);

    wrapper.find(Button).simulate("click");
    expect(mockFn).toBeCalled();
  });

  it("should call register event. case confirm false", () => {
    const shallow = createShallow();
    const mockFn = jest.fn();
    const wrapper = shallow(<WeightField register={mockFn} />);

    jest.spyOn(window, "confirm").mockReturnValue(false);

    wrapper.find(Button).simulate("click");
    expect(mockFn).not.toHaveBeenCalled();
  });
});
