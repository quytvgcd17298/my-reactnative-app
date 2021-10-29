import React, { useState } from "react";
import {Alert, View, Text, StyleSheet, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/CustomButton";
import { useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
    
const db = SQLite.openDatabase("dbName", 1.0);

const Login = ({ navigation }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
  
    useEffect(() => {
        createTable();
        checkLogin();
    }, []);
    const checkLogin = () => {
/*       try {
        const value = await AsyncStorage.getItem("Username");
        if (value !== null) {
          navigation.navigate("Home");
        }
      } catch (error) {
        console.log(error);
      } */

      try{
        db.transaction((tx) =>{
          tx.executeSql("SECLECT Name, Age FROM Users", [], (tx, result) => {
            var len = result.rows.length;
            if(len > 0){
              navigation.navigate("Home");
            }
          });
        });
      }
      catch(error){
        console.log(error);
      }
    }; 

  
    const login = async () => {
      if (name.length === 0 || age.length === 0) {
        Alert.alert("Warning !!!. Please enter your name and age !!!");
      } else {
        try {
        db.transaction((tx) => {
        tx.executeSql(
            "INSERT INTO Users (Name, Age) VALUES (?,?);",
            [name, age],
            (tx, results) => {
                console.log(results.rowsAffected);
            }
            );
        });
        navigation.navigate("Home");
        } catch (error) {
          console.log(error);
        }
      }
    };

    const createTable = () =>{
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS Users(Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            );
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
                 onChangeText={(value) => setAge(value)}
                 value={age}
                 placeholder="Enter your age"
                 secureTextEntry = {true}></TextInput>
            </View>
            <CustomButton
            title ="Login"
            handlePress = {login}
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
