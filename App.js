import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, RefreshControl, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
/*   const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Name: TRAN VAN QUY");
  const decreaseCounter = ()=> {setCounter(counter - 1)}; */
  const [items, setItems] = useState([
    {key:  1, title: "title 1"},
    {key:  2, title: "title 2"},
    {key:  3, title: "title 3"},
    {key:  4, title: "title 4"},
    {key:  5, title: "title 5"},
    {key:  6, title: "title 6"},
    {key:  7, title: "title 7"},
    {key:  8, title: "title 8"},
    {key:  9, title: "title 9"},
    { key: 10, title: "title 10" },
    { key: 11, title: "title 11" },
    { key: 12, title: "title 12" },
    { key: 13, title: "title 13" },
    { key: 14, title: "title 14" },
    { key: 15, title: "title 15" },
    { key: 16, title: "title 16" },
    { key: 17, title: "title 17" },
    { key: 18, title: "title 18" },
    { key: 19, title: "title 19" },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => { setRefreshing(true) 
    setItems([...items,
    {
      key: 20,
      title: "title 20",
    },
    {
      key: 21,
      title: "title 21",
    },
    {
      key: 22,
      title: "title 22",
    },
  ]);
  setRefreshing(false);
};
  return (
      <ScrollView
          refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.container}
    >
        {items.map((item) => {
          return(
        <View style = {{backgroundColor:"red" , fontSize: 30,margin: 10,  alignItems:"center",
        justifyContent: "center",}} key={item.key}>
          <Text style = {styles.Text}>
            Title: {item.title}
          </Text>
        </View>
      );
})}
        
     {/*  <Text style={styles.Text}>Hello Word!!!</Text>

      <Text 
      style={{ backgroundColor:'blue', fontSize: 20 }}
      >
        Counter: {counter}
      </Text>
<Text>
{name}
</Text>
      <Button 
      onPress={()=> setCounter(counter + 1)} 
      title="Increase" 
      color="#003300"
     />
      <Button 
      onPress={decreaseCounter} 
      title="Decrease" 
      color= "#3366FF" 
      />
      <StatusBar/> */}
{/* <View style = {styles.View}>
      <Text>View 1</Text>
    </View>
    <View style = {styles.View2}>
      <Text>View 2</Text>
    </View>
    <View style = {styles.View3}>
      <Text>View 3</Text>
    </View> */}
    </ScrollView>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
/*    flexDirection: "column", */
    backgroundColor: '#fff',
  /*   alignItems: 'center',
    justifyContent: 'center', */
  },
 /*  View: {
    flex: 5,
    height:100,
    width: 100,
    backgroundColor: "green",
    alignItems:"center",
    justifyContent:"center",
  },
   View2: {
    flex: 2,
    height:100,
    width: 100,
    backgroundColor: "blue",
    alignItems:"center",
    justifyContent:"center",
  },
  View3: {
    flex: 2,
    height:100,
    width: 100,
    backgroundColor: "red",
    alignItems:"center",
    justifyContent:"center",
  }, */
  Text:{
    backgroundColor:"red",
    fontSize:30
  },
});
