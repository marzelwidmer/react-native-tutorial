import React, {Component} from 'react'
import {View} from 'react-native'
import Home from './src/components/home/Home.js'

export default class App extends Component<Props> {
  render() {
    return (
        <View>
            <Home/>
        </View>
    )
  }
}
