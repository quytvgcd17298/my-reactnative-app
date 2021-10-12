import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 

const Home = ({navigation, route}) =>{
    const {name} =route.params;
    const {id} =route.params;
    const ScreenHandle = () => {
        navigation.navigate('Login');
    };
    return (
        <View style = {styles.body}>
            <Octicons name="three-bars" size={30} color="black"  />
            <Text style = {styles.text}>Home</Text>
            <TouchableOpacity
            style ={styles.button}
            onPress = {ScreenHandle}
            >
                <Text style = {{fontSize: 20}}>Go to Login</Text>
            </TouchableOpacity>
            <View>
            <Text style={styles.text}>Your name: {name}</Text>
            <Text style={styles.text}>Your Id: {id}</Text> 
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

