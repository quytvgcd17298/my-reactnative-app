import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, 
         FlatList, 
         RefreshControl,
         Button, 
         StyleSheet, 
         Text, 
         View, 
         TextInput, 
         TouchableOpacity, 
         Alert, 
         ToastAndroid,
         ToolbarAndroidComponent} from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [submit, setSubmit] = useState(false);
 /*  const clear = () => {
    setSubmit(false);
    setName("");
    setAddress("");
  } */
  const clear = () => {
    if( name.length < 3 || address.length < 3)
    {
      ToastAndroid.showWithGravityAndOffset
      (" Name and address must be longer than 3 characters",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      800,
      );
/*       Alert.alert("SOS",
        "Name and address must be longer than 3 characters",
      [
        {
          text: "Ok",
          onPress: () => console.warn("Ok Pressed !!!"),
        },
        {
          text: "Cancel",
          onPress: () => console.warn("Cancel Pressed !!!"),
        },
        {
          text: "Do not show again",
          onPress: () => console.warn("Do not show again Pressed !!!"),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.warn("Alert Canceled!!!"),
      }
    ); */
    }
    else
    {
      setSubmit(!submit);
      if(submit)
      {
        setName("");
        setAddress("");
      }
    }
}
  return (
    <View style = {styles.view}>
      <Text style = {styles.Text}> TEXT INPUT AND KEYBOARD </Text>
    <TextInput
      style = {styles.input}
      onChangeText = {(value) => setName(value)}
      placeholder = "Enter your name"
      value = {name}
    ></TextInput>
    <TextInput
      style = {styles.input}
      onChangeText = {(value) => setAddress(value)}
      placeholder = "Enter your address"
      value = {address}
    ></TextInput>
    <TouchableOpacity
    style = {styles.touch}
    title = "submit"
    onPress = {clear}
    >
      <Text
      style = {styles.Text}>
        { submit? "CLEAR" : "SUBMIT"}
      </Text>
    </TouchableOpacity>
{/*     <Button 
      title="View"
      onPress = {()=>setSubmit(true)}
    ></Button> */}
      {submit?
      (
      <View>
      <Text style = {styles.Text}>Your name is: {name}</Text> 
      <Text style = {styles.Text}>Your address is: {address}</Text>
      {/* <Button
      title = "Clear"
      onPress = {(clear)}>
      </Button> */}
      </View>
      )
      : (<Text style = {styles.Text}> Nothing to show </Text>)}
     
    </View>
  )
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
  touch:
  {
    borderWidth: 5,
    backgroundColor: "blue",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  }
});
