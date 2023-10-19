import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackParamList } from './types';
import Login from '../views/login';
import Home from '../views/home';

const StackNavigator = createNativeStackNavigator<StackParamList>();

export default function Stack() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen options={{
          headerShown: false
        }}
          name="LoginScreen" component={Login} />

        <StackNavigator.Screen options={{
          headerShown: false
        }}
          name="MainScreen" component={Home} />

      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}