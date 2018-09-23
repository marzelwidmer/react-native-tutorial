import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Actions } from "react-native-router-flux";

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  const gotToWebViewExample = () => {
    Actions.webViewExample();
  };
  return (
    <View>
      <View>
        <Text>Welcome ...</Text>
      </View>
      <View>
        <TouchableOpacity style={{margin: 10 }} onPress={goToAbout}>
          <Text>This is HOME!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 10 }} onPress={gotToWebViewExample}>
          <Text>WebViewExample</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
