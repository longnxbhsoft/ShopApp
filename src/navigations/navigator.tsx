import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {loginScreens} from '../screens';

const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          options={{headerShown: false}}
          component={loginScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
