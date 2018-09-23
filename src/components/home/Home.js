import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Actions } from "react-native-router-flux";

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  return (
    <View>
      <View>
        <Text>Welcome ...</Text>
      </View>
      <View>
        <TouchableOpacity style={{ margin: 128 }} onPress={goToAbout}>
          <Text>This is HOME!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
