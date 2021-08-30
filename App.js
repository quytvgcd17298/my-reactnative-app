import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, FlatList, RefreshControl, Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [ name, setName] = useState("");
  const [ adress, setAdress] = useState("");
  const [ submitted, setSubmitted] = useState (false);
  const clear = () => {
    setSubmitted(false),
    setName(""),
    setAdress("")
  }
  return (
    <View style = {styles.view}> 
      <Text style = {styles.Text}>TEXT INPUT AND KEYBOARD</Text>
      <TextInput 
      value = {name}
      style = {styles.input}
      onChangeText = {(Value) => setName (Value)}
      placeholder = "Enter your name"/>
      <TextInput
      value = {adress}
      style = {styles.input}
      onChangeText = {(value) => setAdress (value)}
      placeholder = "Enter ur adress"></TextInput> 
      <Button
      title = "Press"
      onPress = {() => setSubmitted(true)} >
      </Button>
    {submitted ?
      (
      <View>
      <Text style = {styles.Text}> Your name is: {name}</Text>
      <Text style = {styles.Text}> Your adress is: {adress}</Text>
      </View>
      ) : (<Text style ={{ padding: 20,}}> Nothing to show</Text>)}
      <Button
      color = "red"
      title = "clear"
      onPress = {clear}>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  view: 
  {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  Text:
  {
    textTransform:"none",
    color: "black",
    fontSize: 20,
  },
  input:
  {
    fontSize: 20,
    margin: 20,
    height: 50,
    width:"90%",
    borderWidth:1,
    borderColor: "red",
    padding: 10,
  },
});
