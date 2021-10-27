import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


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
        }
};
    return (
        <View style = {styles.body}>
            <Octicons name="three-bars" size={30} color="black"  />
            <Text style = {styles.text}>Wellcome Home</Text>
            <View>
            <Text style={styles.text}>Your name: {name}</Text>
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
    input: {
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
export default Home;

