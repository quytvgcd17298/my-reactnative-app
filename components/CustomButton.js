import React from 'react';
import { View , TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = (props) => {
    return (
        <View>
             <TouchableOpacity
                style = {styles.touch}
                onPress = {props.handlePress}>
             <Text style = {styles.Text}>{props.title}</Text>
             </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create(
    {
    Text:
    {
      textTransform:"none",
      color: "white",
      fontSize: 20,
    },
    touch:
  {
    width: 150,
    height: 50,
    borderWidth: 3,
    backgroundColor: "green",
    fontSize: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  }
})

export default CustomButton;



