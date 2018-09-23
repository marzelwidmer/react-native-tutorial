import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class HttpExample extends Component {
  state = {
    data: ""
  };

  fetchJsonplaceholder = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);

        this.setState({
          data: responseJson.body
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  fetchChuckNorris = () => {
    fetch("http://api.icndb.com/jokes/random", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("Response from API: " + responseJson.value.joke);

        this.setState({
          joke: responseJson.value.joke
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  componentDidMount = () => {
    this.fetchJsonplaceholder();
    this.fetchChuckNorris();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.joke}>{this.state.joke}</Text>
        <Text style={styles.data}>{this.state.data}</Text>
      </View>
    );
  }
}

export default HttpExample;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#444444",
    alignItems: "center"
  },
  joke: {
    color: "#4f603c"
  },
  data: {
    color: "#FF55dd"
  }
});
