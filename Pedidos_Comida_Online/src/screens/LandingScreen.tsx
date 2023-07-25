import React, {useState,useReducer, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';


const screenWidth = Dimensions.get('screen').width


export const LandingScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.navigation}/>

            <View style={styles.body}>
                <Text>Landing Screen</Text>
            </View>
            <View style={styles.footer}/>
        </View>
    )  
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    navigation: {
        flex: 2,
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer:{
        flex: 1,
    }
  
})

