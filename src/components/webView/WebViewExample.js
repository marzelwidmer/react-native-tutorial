import React from "react";
import { Actions } from "react-native-router-flux";
import {
    View,
    WebView,
    StyleSheet
 } 
 from 'react-native'

const WebViewExample = () => {
  const goToHome = () => {
    Actions.home();
  };
  return (
    <View style = {styles.container}>
         <WebView
            source = {{ uri: 
               'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=netflix' }}
         />
      </View>
  );
};
export default WebViewExample;

const styles = StyleSheet.create({
    container: {
       height: 350,
    }
 })