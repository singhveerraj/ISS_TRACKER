import React from "react";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import MeteorScreen from "./screens/MeteorScreen";
import IssLocationScreen from "./screens/IssLocationScreen";

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="IssLocation" component={IssLocationScreen}/>
        <Stack.Screen name="Meteor" component={MeteorScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
