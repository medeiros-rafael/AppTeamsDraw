import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/Home/index';
import TeamsDraw from './src/components/Teams Draw/index';
import AddTeams from './src/components/AddTeams/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor = '#5e001f'/>
      <Stack.Navigator
        initialRouteName = 'Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name = 'Home'
          component = {Home}
        />
        <Stack.Screen
          name = 'TeamsDraw'
          component = {TeamsDraw}
        />
        <Stack.Screen
          name = 'AddTeams'
          component = {AddTeams}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}