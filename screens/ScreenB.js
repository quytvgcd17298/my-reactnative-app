import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 

export default function ScreenB({navigation}) {
    const ScreenHandle = () => {
        navigation.navigate('ScreenA');
    };
    return (
        <View style = {styles.body}>
            <Octicons name="three-bars" size={30} color="black" />
            <Text style = {styles.text}>Screen B</Text>
            <TouchableOpacity
            style ={styles.button}
            onPress = {ScreenHandle}
            >
                <Text style = {{fontSize: 20}}>Go to ScreenA</Text>
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
