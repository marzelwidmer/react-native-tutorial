import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../home/Home'
import WebViewExample from '../webView/WebViewExample'
import About from '../about/About'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "webViewExample" component = {WebViewExample} title = "WebViewExample" />
         <Scene key = "about" component = {About} title = "About" />
      </Scene>
   </Router>
)
export default Routes