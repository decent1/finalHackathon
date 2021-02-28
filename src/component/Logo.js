import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native';
var logo = require('../images/crs_logo.png');

export default function Logo() {
    return (
        <Image source={logo} style={styles.logo}/>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: 200,
        height: 200,
        alignSelf:'center',
        margin: 10,
        resizeMode:'contain'
    }
})
