import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import CustomButton from '../components/CustomButton';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("dbName", 1.0);

const Home = ({ navigation }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    // Call only one time when the component is loaded
    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      try {
        db.transaction((tx) =>{
            console.log(123);
            tx.executeSql("SELECT Name, Age FROM Users", [], (tx, result) =>{
                console.log(JSON.stringify(result.rows));
                var len = result.rows.length;
                console.log(len);
                if(len > 0){
                    const userName = result.rows.item(0).Name;
                    const userAge = result.rows.item(0).Age;
                    setName(userName);
                    setAge(userAge);
                }
            })
        })
      } catch (error) {
        console.log(error);
      }
    };
    const logout = async () => {
      try {
        await AsyncStorage.removeItem("Username");
        Alert.alert("Removed !!!. Your name is removed !!!");
        setName("");
        navigation.navigate("Login");
      } catch (error) {
        console.log(error);
      }
    };
    const updateData = async () => {
      if (name.length === 0) {
        Alert.alert("Please enter your name");
      } else {
        await AsyncStorage.setItem("Username", name);
        Alert.alert("Your name is updated !!!");
      }
    };
  
    return (
        <View style = {styles.body}>
            <Octicons name="three-bars" size={30} color="black"  />
            <Text style = {styles.text}>Wellcome Home</Text>
            <View>
            <Text style={styles.text}>Your name: {name}</Text>
            <Text style={styles.text}>Your age: {age}</Text>
            </View>
            <CustomButton
            title = "Logout"
            handlePress = {logout}></CustomButton>
             <View style={styles.editInput}>
                <TextInput
                 style={styles.input}
                 onChangeText={(value) => setName(value)}
                 placeholder="Enter name update"></TextInput>
                <CustomButton
            title = "Update"
            handlePress = {updateData}></CustomButton>
            </View>
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
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      editInput:{
          alignItems:"center",
          justifyContent:"center",

      }
});
export default Home;

