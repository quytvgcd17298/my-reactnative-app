import { StyleSheet, 
         Text, 
         View,
         Button, 
         TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator ();

export default function App() {
  return (
   <NavigationContainer>
     <Tab.Navigator 
     screenOptions = {({route}) => ({
       tabBarIcon:({focused}) => {
       if(route.name === "ScreenA") 
       {
         return (
          <Octicons name="person" size={24} color= {focused? "blue" : "black"} />
         );
       }
       else if (route.name === "ScreenB")
       {
         return ( 
         <Octicons name="three-bars" size={24} color={focused? "blue" : "black"} />
         );
       }
     },
    })}
     >
     <Tab.Screen name = "ScreenA" component = {ScreenA}/>
     <Tab.Screen name = "ScreenB" component = {ScreenB}/>
     </Tab.Navigator>
   </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
