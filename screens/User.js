import React, {useState} from 'react'
import { View, StyleSheet, Text, FlatList} from 'react-native';
import { useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
import UserItem from './UserItem';


const db = SQLite.openDatabase("dbName", 1.0)

const User = () => {
    const [user, setUser] = useState({});
    const [data, setData] = useState([]);

    useEffect(() =>{getUser();}, []);

    const getUser = () => {
        try{
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM Users", 
            [], 
            (tx, result) =>{
                var len = result.rows.length;
                console.log(JSON.stringify(result.rows));
                for (let i = 0; i< len; i++){
                    let row = result.rows.item(i);
                    setData((prevState) =>[
                        ...prevState,
                        {Id: row.Id, Name: row.Name, Age: row.Age},
                    ]);
                }
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
        data={data}
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