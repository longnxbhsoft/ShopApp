import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  addressConfirmScreen,
  CheckOrderScreens,
  DetailScreen,
  FBScreen,
  loginScreens,
  registerScreens,
  SuccessOrderScreens,
} from '../screens';
import {MainTab} from '../screens/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {CheckLogin} from '../reduxs/actions/Home.act';

const Navigator = (props: {checkLogin: (arg0: string) => void; login: any}) => {
  const Stack = createStackNavigator();

  useState(async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
        props.checkLogin(value);
      }
    } catch (e) {
      // error reading value
    }
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          options={{headerShown: false}}
          children={MainTab}
        />
        <Stack.Screen
          name="address"
          options={{headerShown: false}}
          component={addressConfirmScreen}
        />
        <Stack.Screen
          name="check"
          options={{headerShown: false}}
          component={CheckOrderScreens}
        />
        <Stack.Screen
          name="success"
          options={{headerShown: false}}
          component={SuccessOrderScreens}
        />
        <Stack.Screen
          name="Detail"
          options={{headerShown: false}}
          component={DetailScreen}
        />
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
          name="fblogin"
          options={{headerShown: false}}
          component={FBScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: {login?: any}) => {
  const {login} = state;
  return {
    login: login,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  checkLogin: (payload: any) => dispatch(CheckLogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
