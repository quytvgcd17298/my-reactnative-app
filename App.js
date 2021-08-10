import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Tran Van Quy");
  const decreaseCounter = ()=> {setCounter(counter - 1)};
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello Word!!!</Text>

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
      title="Increase" color="#003300"
     />
      <Button 
      onPress={decreaseCounter} 
      title="Decrease" 
      color= "#3366FF" 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    backgroundColor:"red",
    fontSize:30
  },
});
