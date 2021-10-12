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
import Login from './screens/Login';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Tab.Navigator
     screenOptions ={{
       headerShown: true,
       headerStyle:{
         backgroundColor: "blue",
       },
        headerTitleAlign: "center",
         headerTintColor: "white"
     }}
     initialRouteName = "Login"
     screenOptions =
      {({route}) => ({tabBarIcon:({focused}) =>
      {
        if (route.name === "Login") {
          return(
            <Octicons name="person" size={30} color= {focused? "blue":"black"} />
          );
        }
        else if(route.name === "Home") {
          return(
            <Octicons name="three-bars" size={30} color={focused? "blue":"black"}  />
          );
        }
      }}
      )
      
    }
    
     >
     <Tab.Screen 
     name = "Login"
     component = {Login} 
     />
     <Tab.Screen 
     name = "Home" 
     component = {Home} 
     />
     </Tab.Navigator>
   </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
