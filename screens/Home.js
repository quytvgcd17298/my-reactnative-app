import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import CustomButton from '../components/CustomButton';


const Home = ({navigation}) =>{
const [name, setName] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
        const value = await AsyncStorage.getItem("Username");
        if (value !== null) {
            setName(value);
        }
        } catch (error) {
        console.log(error);
        }; 
    }
    const Logout = async () =>{
            try{
                await AsyncStorage.removeItem("UserName")
                Alert.alert("Your name is remove!!!");
                setName("");
                navigation.navigate("Login");
            }
            catch(error){
                console.log(error);
            }
        };
    const UpdateData = async () =>{
        if(name.length === 0){
            Alert.alert("Please enter your name")
        }
        else{
            await AsyncStorage.setItem("UserName", name);
            Alert.alert("Your name is updated");
        }
    };
    return (
        <View style = {styles.body}>
            <Octicons name="three-bars" size={30} color="black"  />
            <Text style = {styles.text}>Wellcome Home</Text>
            <View>
            <Text style={styles.text}>Your name: {name}</Text>
            </View>
            <CustomButton
            title = "Logout"
            handlePress = {Logout}></CustomButton>
             <View style={styles.editInput}>
                <TextInput
                 style={styles.input}
                 onChangeText={(value) => setName(value)}
                 placeholder="Enter name update"></TextInput>
                <CustomButton
            title = "Update"
            handlePress = {UpdateData}></CustomButton>
            </View>
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

