import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors, Icons} from '../../assets';
import {Container} from '../components';
import {Inputs, ButtonAccept} from '../components';

const LoginScreen = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const createAnAcout = () => {
    props.navigation.navigate('registers');
  };

  const login = () => {
    props.navigation.navigate('home');
  };

  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <View flex-8 style={styles.container} centerH>
        <View height={60} marginT-100 center>
          <Text style={styles.fonts}>Đăng nhập</Text>
        </View>
        <View flex-2 />
        <View height={150} centerH backgroundColor={Colors.black01}>
          <Inputs
            leftIcons={Icons.login.email}
            placeholder={'Số điện thoại'}
            keyboardType={'phone-pad'}
          />
          <Inputs leftIcons={Icons.login.pass} placeholder={'Mật khẩu'} />
        </View>
        <View flex-1 />
        <TouchableOpacity>
          <Text color={Colors.blueNavy}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <View flex-2 />
        <ButtonAccept iconLeft={false} title={'Đăng nhập'} onPress={login} />
      </View>
      <View flex-2 center>
        <TouchableOpacity onPress={createAnAcout}>
          <Text color={Colors.blueNavy}>Tạo tài khoản mới?</Text>
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
});

export default LoginScreen;
