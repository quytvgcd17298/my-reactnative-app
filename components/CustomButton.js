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
    borderWidth: 5,
    backgroundColor: "blue",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  }
})

export default CustomButton;



