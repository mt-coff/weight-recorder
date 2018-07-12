import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AddWeight from "@/pages/AddWeight";
import ExportJson from "@/pages/ExportJson";
import ImportJson from "@/pages/ImportJson";
import Statistics from "@/pages/Statistics";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/add-weight" component={AddWeight} />
      <Route exact={true} path="/statistics" component={Statistics} />
      <Route exact={true} path="/export-json" component={ExportJson} />
      <Route exact={true} path="/import-json" component={ImportJson} />
      <Redirect from="/" to="/statistics" />
    </Switch>
  );
};

export default Routes;
