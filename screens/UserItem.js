import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const UserItem = ({user, navigation}) => {
    return (
        <View style = {styles.container}>
            <View>
            <TouchableOpacity
            onPress={() => navigation.navigate("UserDetail", {user})}>
            <Text style = {styles.id}>{user.Id}</Text>
            <Text style = {styles.text}>{user.Name}</Text>
            <Text style = {styles.text}>{user.Age}</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}

export default UserItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        padding:"10%",
        marginBottom:"5%",
        borderRadius:5,
        borderWidth:2,
        borderColor:"green",
        backgroundColor:"#eee",
        marginBottom:20

    },
    id:{
        fontSize:28,
    },
    text: {

    }
});
