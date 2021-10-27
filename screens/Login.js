import React, { useState } from "react";
import {Alert, View, Text, StyleSheet, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/CustomButton";
import { useEffect } from 'react';

const Login = ({navigation}) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    useEffect (()=>{
        checkLogin();
    }, []);
    
    const checkLogin = async () => {
        try {
          const value = await AsyncStorage.getItem("Username");
          if (value !== null) {
            navigation.navigate("Home");
          }
        } catch (error) {
          console.log(error);
        }
      };

    const ScreenHandle = async () => {
        if(name.length === 0 || password.length ===0){
            Alert.alert("Warnning!!! Please enter your name and password");
        }
        else {
            try{
                await AsyncStorage.setItem("UserName", name);
                setName("");
                setPassword("");
                navigation.navigate("Home");
            }    
            catch(error){
                console.log(error);
            }
        }
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
                 placeholder="Enter password"
                 secureTextEntry = {true}></TextInput>
            </View>
            <CustomButton
            title ="Login"
            handlePress = {ScreenHandle}
            ></CustomButton>
        </View>  
    );  
};

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
