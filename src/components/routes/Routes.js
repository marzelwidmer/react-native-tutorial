import React from "react";
import { StyleSheet } from "react-native";
import { Router, Scene, Navigator } from "react-native-router-flux";

import Home from "../home/Home";
import WebViewExample from "../webView/WebViewExample";
import SettingsContainer from "../settings/SettingsContainer";
import About from "../about/About";
import GeolocationExample from '../home/GeolocationExample';
import AsyncStorageExample from '../home/AsyncStorageExample';

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
        key="geolocationExample"
        component={GeolocationExample}
        title="GeolocationExample"
        leftButtonIconStyle={styles.backButton}
      />
       <Scene
        key="asyncStorageExample"
        component={AsyncStorageExample}
        title="AsyncStorageExample"
        leftButtonIconStyle={styles.backButton}
      />
      <Scene
        key="webViewExample"
        component={WebViewExample}
        title="WebViewExample"
        leftButtonIconStyle={styles.backButton}
      />
      <Scene
        key="settingsContainer"
        component={SettingsContainer}
        title="SettingsContainer"
        leftButtonIconStyle={styles.backButton}
      />
      <Scene
        key="about"
        backTitle="Zrog"
        backButtonTextStyle={styles.navBack}
        navBarButtonColor="#FF3B30"
        backButtonTintColor="#FF3B30"
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
  },
  navBack: {
    color: "#FF3B30" // changing navbar title color
  }
});
