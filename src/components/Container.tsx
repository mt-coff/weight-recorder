import MainContent from "@/components/MainContent";
import NavHeader from "@/components/NavHeader";
import * as React from "react";

export default class Container extends React.Component {
  public render() {
    return (
      <div>
        <NavHeader />
        <MainContent />
      </div>
    );
  }
}
