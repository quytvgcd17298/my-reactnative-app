import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
/*   const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Name: TRAN VAN QUY");
  const decreaseCounter = ()=> {setCounter(counter - 1)}; */
  const [items, setItems] = useState([
    {key: "1", title: "title 1"},
    {key: "2", title: "title 2"},
    {key: "3", title: "title 3"},
    {key: "4", title: "title 4"},
    {key: "5", title: "title 5"},
    {key: "6", title: "title 6"},
    {key: "7", title: "title 7"},
    {key: "8", title: "title 8"},
    {key: "9", title: "title 9"},
  ]);
  return (
      <View style={styles.container}>
        {items.map((item) => {
          return(
        <View style = {{backgroundColor:"red" , fontSize: 30,margin: 10,
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
    </View>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
/*    flexDirection: "column", */
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
