import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors, Icons, Metrics} from '../../assets';
import {Container} from '../components';
import {Inputs} from '../components';

const RegisterScreen = (props: {navigation: {goBack: () => void}}) => {
  const goToLogin = () => {
    props.navigation.goBack();
  };
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <View flex-8 style={styles.container} centerH>
        <View flex-2 />
        <View height={60} center>
          <Text style={styles.fonts}>Đăng kí</Text>
        </View>
        <View flex-2 />
        <View height={150} centerH backgroundColor={Colors.black01}>
          <Inputs
            leftIcons={Icons.login.email}
            placeholder={'Số điện thoại'}
            keyboardType={'phone-pad'}
          />
          <Inputs leftIcons={Icons.login.pass} placeholder={'Mật khẩu'} />
          <Inputs leftIcons={Icons.login.pass} placeholder={'Mật khẩu'} />
        </View>
        <View flex-2 />
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.titleButton}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
      <View flex-2 center>
        <TouchableOpacity onPress={goToLogin}>
          <Text color={Colors.blueNavy}>Đăng nhập?</Text>
        </TouchableOpacity>
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
  fonts: {
    fontSize: 24,
    color: Colors.orangeCarrot,
  },
  Button: {
    width: Metrics.screen.width - 60,
    height: 60,
    backgroundColor: Colors.orangeCarrot,
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom: 30,
  },
  titleButton: {
    alignSelf: 'center',
    fontSize: 20,
    color: Colors.white,
  },
});

export default RegisterScreen;
