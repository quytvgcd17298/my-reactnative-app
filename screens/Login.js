import React, { useState } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 

const Login = ({navigation}) => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const ScreenHandle = () => {
        navigation.navigate('Home',{
            name:name,
            id:id
        });
    };
    return (
        <View style = {styles.body}>
            <Octicons name="person" size={30} color= "black" />
            <Text style = {styles.text}>Login</Text>
            <View>
                <TextInput
                 style={styles.input}
                 onChangeText={(value) => setName(value)}
                 value={name}
                 placeholder="Enter name"></TextInput>
                <TextInput
                style={styles.input}
                onChangeText={(value) => setPassword(value)}
                value={password}
                placeholder="Enter password"></TextInput>
            </View>
            <TouchableOpacity
            style ={styles.button}
            onPress = {ScreenHandle}
            >
            <Text style = {{fontSize:20}}>Go to Home</Text>
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
    },
    input:{
        width: 350,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
export default Login;
