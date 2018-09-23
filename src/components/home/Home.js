import React from 'react'
import HttpExample from './HttpExample'

const Home = () => {
    return (
        <HttpExample />
    )
}

export default Home



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