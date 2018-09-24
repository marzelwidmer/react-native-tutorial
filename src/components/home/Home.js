import React from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import { Actions } from "react-native-router-flux";

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  const gotToWebViewExample = () => {
    Actions.webViewExample();
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
      </View>
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
  }
});
