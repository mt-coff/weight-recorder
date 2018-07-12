import * as React from "react";

import Routes from "@/Routes";
import { BrowserRouter } from "react-router-dom";

export default class MainContent extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}
