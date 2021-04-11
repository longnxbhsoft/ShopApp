import React from 'react';
// import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {Container, Header} from '../components';

const CartScreen = () => {
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header cart={true} title={'Giỏ hàng'} />
      <View />
    </Container>
  );
};

// const styles = StyleSheet.create({});

export default CartScreen;
