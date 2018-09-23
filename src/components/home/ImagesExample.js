import React, {Component} from 'react'
import {Image} from 'react-native'

const Home = () => (
    <Image
        // Local Image
            source={require('../../img/icon.png')}
        // Network Image
        // source = {{ uri:
        //         'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}

           style={{width: 200, height: 200, top: 30, left: 5}}/>

)

export default Home
