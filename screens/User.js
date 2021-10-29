import React, {useState} from 'react'
import { View, StyleSheet, Text, FlatList} from 'react-native';
import { useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
import UserItem from './UserItem';


const db = SQLite.openDatabase("dbName", 1.0)

const User = () => {
    const [user, setUser] = useState([ 
    {
        Id: 1,
        Name: "Van Quy",
        Age: 30,
    },
    {
        Id: 2,
        Name: "Nhat Huy",
        Age: 30,
    },
    {
        Id: 3,
        Name: "Van Hoang",
        Age: 30,
    },
    {
        Id: 4,
        Name: "Hoang An",
        Age: 30,
    },]);

    useEffect(() =>{getUser();}, []);

    const getUser = () => {
        try{
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM Users", 
            [], 
            (tx, result) =>{
                console.log(JSON.stringify(result.rows));
            });
        });
        }
        catch(error){
            console.log(error);
        }
    };

    return (
    <View style={styles.body}>
    <Text style = {{fontSize:25, color:"green", marginBottom:20}}>Show all Users</Text>
    <View style={styles.container}>
      <FlatList
        data={user}
        keyExtractor={(item) => String(item.Id)}
        renderItem={({ item }) => <UserItem user={item} />}
      />
    </View>
    </View>
    )
}

export default User
const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    }
  });