import { StyleSheet, 
         Text, 
         View,
         Button, 
         TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from 'react-native-screens/native-stack';
import React from 'react';


const Stack = createNativeStackNavigator();

function ScreenA ({navigation}){
  const NavigateHandle = () => {
        navigation.navigate("ScreenB");
  };
  return (
    <View>
      <Text> This is ScreenA</Text>
      <Button 
       title='GO TO SCREEN B'
       onPress={NavigateHandle}
     ></Button>
    </View>
  );
}
function ScreenB ({navigation}){
  const NavigateHandle = () => {
    navigation.navigate("ScreenA");
  };
  return (
    <View>
      <Text>ScreenB</Text>
      <Button
      title = 'Go to Screen A'
      onPress = {NavigateHandle}
      ></Button>
    </View>
  );
}

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name = "ScreenA" component = {ScreenA}/>
     <Stack.Screen name = "ScreenB" component = {ScreenB}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
