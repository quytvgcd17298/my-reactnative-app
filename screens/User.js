import React from 'react'
import { View, StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const User = ({navigation}) => {
    return (
    <View style={styles.body}>
    <Text>Show all Users</Text>
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
  });