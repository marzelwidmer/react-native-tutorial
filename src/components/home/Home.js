import React from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";

const showAlert = () => {
  Alert.alert("You need to...");
};

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  const goToGeolocationExample = () => {
    Actions.geolocationExample();
  };
  const gotToWebViewExample = () => {
    Actions.webViewExample();
  };
  const gotToSettingsContainer = () => {
    Actions.settingsContainer();
  };
  return (
    <View style={styles.container2}>
      <StatusBar barStyle="light-content" hidden={false} />

      <View>
        <Text style={styles.welcome}>Welcome ...</Text>
      </View>
      <View>
        <TouchableOpacity style={{ margin: 10 }} onPress={goToAbout}>
          <Text style={styles.home}>This is HOME!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 10 }} onPress={gotToWebViewExample}>
          <Text style={styles.webView}>WebViewExample</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={gotToSettingsContainer}
        >
          <Text style={styles.webView}>SettingsContainer</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>
        <Text style={styles.capitalLetter}>L</Text>

        <Text>orem ipsum dolor sit amet, sed do eiusmod.</Text>

        <Text>
          Ut enim ad <Text style={styles.wordBold}>minim </Text> veniam, quis
          aliquip ex ea commodo consequat.
        </Text>

        <Text style={styles.italicText}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </Text>

        <Text style={styles.textShadow}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </Text>

      <TouchableOpacity onPress={showAlert} style={styles.button}>
        <Text style={styles.italicText}>Alert</Text>
      </TouchableOpacity>

        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={goToGeolocationExample}
        >
          <Text style={styles.webView}>GeolocationExample</Text>
        </TouchableOpacity>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    paddingTop: 130,
    paddingHorizontal: 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#191919"
  },
  welcome: {
    fontSize: 60,
    textAlign: "center",
    color: "#FAFAFA",
    marginBottom: 5,
    margin: 10
  },
  home: {
    color: "#424242"
  },
  webView: {
    color: "#EEEEEE"
  },
  text: {
    color: "#41cdf4"
  },
  capitalLetter: {
    color: "red",
    fontSize: 20
  },
  wordBold: {
    fontWeight: "bold",
    color: "black"
  },
  italicText: {
    color: "#37859b",
    fontStyle: "italic"
  },
  textShadow: {
    textShadowColor: "red",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5
  }
});
