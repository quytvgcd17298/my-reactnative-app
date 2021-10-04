import { StyleSheet, 
         Text, 
         View,
         Button, 
         TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { Octicons } from '@expo/vector-icons'; 
import React from 'react';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Drawer.Navigator
     initialRouteName = "ScreenB"
     hireStartusBar = {true}
     >
     <Drawer.Screen 
     name = "ScreenA"
     component = {ScreenA} 
     options= {{
       title: " Screen A bar",
       drawerIcon: () => (
          <Octicons name="person" size={30} color= "black" /> ),
     }}/>
     <Drawer.Screen 
     name = "ScreenB" 
     component = {ScreenB} 
     options= {{
      title: " Screen B bar",
      drawerIcon: () => (
        <Octicons name="three-bars" size={30} color="black"  />
      )
      }}/>
     </Drawer.Navigator>
   </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
