import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {Container} from '../components';

const LoginScreen = () => {
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <View flex-10>
        <View flex-8 style={styles.container} />
        <View flex-2 />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowColor: Colors.greyDrank,
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.white,
  },
});

export default LoginScreen;
