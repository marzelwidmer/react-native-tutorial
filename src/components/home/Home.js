import React, { Component } from "react";
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native'


const Home = () => {
  const handlePress = () => false;
  return (
    <View style = {styles.container}>
         <TouchableNativeFeedback>
            <Text style = {styles.text}>
               Button
            </Text>
         </TouchableNativeFeedback>
      </View>
  );
};

export default Home;

const styles = StyleSheet.create ({
    container: {
       alignItems: 'center',
    },
    text: {
       borderWidth: 1,
       padding: 25,
       borderColor: 'black',
       backgroundColor: 'red'
    }
 })

// const Home = (props) =>  {
//     return (
//         <View>
//             <View style = {style.container1}>
//                 <View style = {style.blackImg}/>
//                 <View style = {style.yellowImg}/>
//             </View>
//             <View style = {style.container2}>
//                 <View style = {style.blackImg}/>
//                 <View style = {style.yellowImg}/>
//             </View>
//
//             <View style = {style.container3}>
//                 <View style = {style.blackImg}/>
//                 <View style = {style.yellowImg}/>
//             </View>
//
//             <View style = {style.container4}>
//                 <View style = {style.blackImg}/>
//                 <View style = {style.yellowImg}/>
//             </View>
//
//             <View style = {style.container5}>
//                 <View style = {style.blackImg}/>
//                 <View style = {style.yellowImg}/>
//             </View>
//         </View>
//     )
// }

// const style = StyleSheet.create ({
//     container1: {
//         borderBottomWidth: 1,
//         borderBottomColor: '#f4c842'
//     },
//     container2: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         borderBottomWidth: 1,
//         borderBottomColor: '#f4c842'
//     },
//     container3: {
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         borderBottomWidth: 1,
//         borderBottomColor: '#f4c842'
//     },
//     container4: {
//         alignItems: 'center',
//         borderBottomWidth: 1,
//         borderBottomColor: '#f4c842'
//     },
//     container5: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     blackImg: {
//         backgroundColor: 'black',
//         height: 90,
//         width: 90
//     },
//     yellowImg: {
//         backgroundColor: 'yellow',
//         height: 50,
//         width: 50
//     }
// })
