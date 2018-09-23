import React, { Component } from "react";
import { AppRegistry } from "react-native";
import Routes from "./src/components/routes/Routes";

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
AppRegistry.registerComponent("reactTutorialApp", () => reactTutorialApp);
