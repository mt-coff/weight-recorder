import { mount, ReactWrapper } from "enzyme";
import * as React from "react";
import { MemoryRouter } from "react-router";

import AddWeight from "@/pages/AddWeight";
import ExportJson from "@/pages/ExportJson";
import ImportJson from "@/pages/ImportJson";
import Statistics from "@/pages/Statistics";
import Routes from "@/Routes";

describe("Routing test", () => {
  const createDOM = (path = "/"): ReactWrapper => {
    return mount(
      <MemoryRouter initialEntries={[path]}>
        <Routes />
      </MemoryRouter>
    );
  };

  it("should render the add-weight page", () => {
    expect(createDOM("/add-weight").find(AddWeight).length).toBe(1);
  });

  it("should render the statistics page", () => {
    expect(createDOM("/statistics").find(Statistics).length).toBe(1);
  });

  it("should render the ExportJson page", () => {
    expect(createDOM("/export-json").find(ExportJson).length).toBe(1);
  });

  it("should render the ImportJson page", () => {
    expect(createDOM("/import-json").find(ImportJson).length).toBe(1);
  });

  it("should render the Statistics page with redirect", () => {
    expect(createDOM().find(Statistics).length).toBe(1);
  });
});
