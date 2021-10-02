import React from 'react'
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ScreenA({navigation}) {
    const ScreenHandle = () => {
        navigation.navigate('ScreenB');
    };
    return (
        <View style = {styles.body}>
            <Text style = {styles.text}>Screen A</Text>
            <TouchableOpacity
            style ={styles.button}
            onPress = {ScreenHandle}
            >
            <Text style = {{fontSize:20}}>Go to ScreenB</Text>
            </TouchableOpacity>
        </View>
    )  
}
const styles = StyleSheet.create({
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    text:{
        fontSize: 20,
        margin: 20,
        textTransform:'uppercase',
        fontWeight:'bold'
    },
    button:{
        alignItems: 'center',
        justifyContent:'center',
        height: 50,
        width: 150,
        backgroundColor:'#3399FF',
        margin: 20,
        borderRadius: 10,
        borderWidth:2,
    }
});
