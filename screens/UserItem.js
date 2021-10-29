import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UserItem = ({user}) => {
    return (
        <View style = {styles.container}>
            <View>
            <Text style = {styles.id}>{user.Id}</Text>
            <Text style = {styles.text}>{user.Name}</Text>
            <Text style = {styles.text}>{user.Age}</Text>
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
        flexWrap:'wrap',
        fontSize:28,
        width:"99%"
    },
    text: {

    }
});
