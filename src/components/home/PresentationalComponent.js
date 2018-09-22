import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

const PresentationalComponent = (props) => {
    return (
        <View>
            <Text style={styles.myState} onPress={props.updateState}>
                {props.myState}
            </Text>
        </View>
    )
}
export default PresentationalComponent

const styles = StyleSheet.create({
    myState: {
        backgroundColor: "#0D0D0D",
        marginTop: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: '200',
        fontSize: 20
    }
})

