import { StyleSheet, 
         Text, 
         View,
         Button, 
         TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Drawer.Navigator>
     <Drawer.Screen name = "ScreenA" component = {ScreenA} options={{ tabBarBadge: 3 }}/>
     <Drawer.Screen name = "ScreenB" component = {ScreenB} options={{ tabBarBadge: 1 }}/>
     </Drawer.Navigator>
   </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
