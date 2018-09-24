import React from "react";
import { Router, Scene, Navigator } from "react-native-router-flux";
import Home from "../home/Home";
import WebViewExample from "../webView/WebViewExample";
import About from "../about/About";
import { StyleSheet } from "react-native";

const Routes = () => (
  <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
    <Scene key="root">
      <Scene
        key="home"
        component={Home}
        title="Home"
        initial={true}
        leftButtonIconStyle={styles.backButton}
      />
      <Scene
        key="webViewExample"
        component={WebViewExample}
        title="WebViewExample"
        leftButtonIconStyle={styles.backButton}
      />
      <Scene
        key="about"
        backTitle="Zrog"
        backButtonTextStyle={styles.navTitle}

        navBarButtonColor="red"
        backButtonTintColor="red"
        component={About}
        title="About"
      />
    </Scene>
  </Router>
);
export default Routes;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#0D0D0D" // changing navbar color
  },
  navTitle: {
    color: "#EEEEEE" // changing navbar title color
  }
});