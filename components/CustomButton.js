import React from 'react';
import { View , TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ text, HandleClear}) => {
    return (
        <View>
             <TouchableOpacity
                style = {styles.touch}
                title = "submit"
                onPress = {HandleClear}>
             <Text style = {styles.Text}>{text}</Text>
             </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create(
    {
    Text:
    {
      textTransform:"none",
      color: "black",
      fontSize: 20,
    },
    touch:
  {
    width: 150,
    height: 50,
    borderWidth: 3,
    backgroundColor: "lightblue",
    fontSize: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  }
})

export default CustomButton;



