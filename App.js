import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Name: TRAN VAN QUY");
  const decreaseCounter = ()=> {setCounter(counter - 1)};
  return (
      <View style={styles.container}>
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
<View style = {styles.View}>
      <Text>View 1</Text>
    </View>
    <View style = {styles.View2}>
      <Text>View 2</Text>
    </View>
    <View style = {styles.View3}>
      <Text>View 3</Text>
    </View>
    </View>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View: {
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
  },
  Text:{
    backgroundColor:"red",
    fontSize:30
  },
});
