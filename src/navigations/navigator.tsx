import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {loginScreens, registerScreens} from '../screens';
import {MainTab} from '../screens/components';

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
        <Stack.Screen
          name="registers"
          options={{headerShown: false}}
          component={registerScreens}
        />
        <Stack.Screen
          name="home"
          options={{headerShown: false}}
          children={MainTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
