import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  addressConfirmScreen,
  CheckOrderScreens,
  loginScreens,
  registerScreens,
  SuccessOrderScreens,
} from '../screens';
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
        <Stack.Screen
          name="address"
          options={{headerShown: false}}
          children={addressConfirmScreen}
        />
        <Stack.Screen
          name="check"
          options={{headerShown: false}}
          children={CheckOrderScreens}
        />
        <Stack.Screen
          name="success"
          options={{headerShown: false}}
          children={SuccessOrderScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
